import * as React from 'react'

const styles = {
  display: 'flex',
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
    transition: 'filter .5s, transform .5s'
  }
}

export default function App() {
  const [isLoading, setLoading] = React.useState(true)
  return (
    <div style={styles}>
      <div style={{ marginRight: '80px' }}>
        <div style={{ overflow: 'hidden' }}>
          <img
            src='../tom.jpeg'
            alt='sexy-image-loader'
            width='350px'
            height='350px'
            style={isLoading 
              ? { ...blurEffect.filterOn, transform: 'scale(1.2)' } 
              : { ...blurEffect.filterOff, transform: 'scale(1)' }}
            onLoad={() => setLoading(false)}
            loading='lazy'
          />
        </div>
        <h2>it looks</h2>
      </div>
      <div>
        <img
          src='../tom.jpeg'
          alt='sexy-image-loader'
          width='350px'
          height='350px'
          style={isLoading ? blurEffect.filterOn : blurEffect.filterOff}
          onLoad={() => setLoading(false)}
          loading='lazy'
        />
        <h2>awesome</h2>
      </div>
    </div>
  )
}
