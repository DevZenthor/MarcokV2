function Videos() {
  return (
    <div id="videos" className="container py-5">

      <h2 className="section-title text-center mb-5">
        Vidéos de MARCOK
      </h2>

      <div className="row g-4">

        {/* VIDEO 1 */}
        <div className="col-md-4">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/0yHofkfgo2o"
              title="video1"
              allowFullScreen>
            </iframe>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="col-md-4">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/FY1ZKKXFg4w"
              title="video2"
              allowFullScreen>
            </iframe>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="col-md-4">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/8tJGQeoHoFQ"
              title="video3"
              allowFullScreen>
            </iframe>
          </div>
        </div>

        {/* VIDEO 4 */}
        <div className="col-md-4">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/6qi_klPzQGU"
              title="video4"
              allowFullScreen>
            </iframe>
          </div>
        </div>

        {/* VIDEO 5 */}
        <div className="col-md-4">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/dUhoFmsTfoQ"
              title="video5"
              allowFullScreen>
            </iframe>
          </div>
        </div>

        {/* VIDEO 6 */}
        <div className="col-md-4">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/OkdSMtV2bvc"
              title="video6"
              allowFullScreen>
            </iframe>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Videos;