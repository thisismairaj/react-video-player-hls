import { useState } from "react"
import ReactPlayer from "react-player"

function App() {
  const [video, setVideo] = useState(
    "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
  )

  return (
    <>
      <h1>Enter video URL to play</h1>

      <input
        value={video}
        onChange={(e) => setVideo(e.target.value)}
        type="text"
        placeholder="Enter video URL..."
        style={{ marginBottom: "20px" }}
      />

      <ReactPlayer
        controls
        volume={0.1}
        url={video}
        config={{
          file: {
            attributes: {},
          },
        }}
      />
    </>
  )
}

export default App
