import * as React from 'react'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

const blurEffect = {
  filterOn: {
    filter: 'grayscale(1) blur(12px)'
  },
  filterOff: {
    filter: 'grayscale(0) blur(0)',
    transition: 'filter .5s'
  }
}

export default function App() {
  const [isLoading, setLoading] = React.useState(true)
  return (
    <div style={styles}>
      <img
        src='../tom.jpeg'
        alt='sexy-img-loader'
        width='350px'
        height='350px'
        style={isLoading ? blurEffect.filterOn : blurEffect.filterOff}
        onLoad={() => setLoading(false)}
        loading='lazy'
      />
      {!isLoading && (
        <h1>awesome</h1>
      )}
    </div>
  )
}
