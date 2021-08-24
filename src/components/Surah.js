import React from "react"
import { FaPlay, FaDownload } from "react-icons/fa"

const Surah = ({ title, source }) => {
  return (
    <article className="surah">
      <h3>{title}</h3>

      <audio src={source}></audio>

      <div className="listen">
        <button>
          Play
          <FaPlay className="listen-icon" />
        </button>
        {/* <button>
          Download
          <FaDownload className="listen-icon" />
        </button> */}
        <a href={source} download>
          Download
          <FaDownload className="listen-icon" />
        </a>
      </div>
    </article>
  )
}

export default Surah
