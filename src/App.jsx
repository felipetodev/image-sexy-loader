import * as React from 'react'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

const blurEffect = {
  filterOn: {
    filter: 'grayscale(1) blur(42px)',
    opacity: 0
  },
  filterOff: {
    filter: 'grayscale(0) blur(0)',
    transition: 'filter 1.2s, transform 1.2s',
    willChange: 'filter, transform',
    opacity: 1
  }
}

const Image = ({ loading, onLoad, scale }) => (
  <div style={{ overflow: 'hidden' }}>
    <img
      src='../tom.jpeg'
      alt='sexy-image-loader'
      width='350px'
      height='350px'
      style={loading 
        ? { ...blurEffect.filterOn, ...(scale && { transform: 'scale(1.5)' }) } 
        : { ...blurEffect.filterOff, ...(scale && { transform: 'scale(1)' }) }}
      onLoad={() => onLoad(false)}
      loading='lazy'
    />
  </div>
)

export default function App() {
  const [isLoading, setLoading] = React.useState(true)
  return (
    <div style={styles}>
      <div style={{ marginRight: '80px' }}>
        <Image loading={isLoading} onLoad={setLoading} scale />
        <h2>it looks</h2>
      </div>
      <div>
        <Image loading={isLoading} onLoad={setLoading} />
        <h2>awesome</h2>
      </div>
    </div>
  )
}
