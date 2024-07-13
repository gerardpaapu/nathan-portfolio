function AboutMe() {
  return (
    <div className="hero min-h-screen" id="about">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <div className="bg-primary text-primary-content grid h-20 w-32 place-content-center rounded">
            <a href="https://www.linkedin.com/in/nathan-emmerson-1b4705316/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.723v20.554C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.277V1.723C24 .774 23.21 0 22.23 0zM7.12 20.452H3.558V9H7.12v11.452zM5.34 7.548c-1.125 0-2.04-.915-2.04-2.04s.915-2.04 2.04-2.04 2.04.915 2.04 2.04-.916 2.04-2.04 2.04zM20.452 20.452h-3.558v-5.624c0-1.34-.026-3.064-1.867-3.064-1.867 0-2.153 1.457-2.153 2.961v5.727h-3.558V9H13.72v1.564h.051c.496-.94 1.705-1.93 3.51-1.93 3.75 0 4.44 2.467 4.44 5.673v6.145z"></path>
              </svg>
            </a>
          </div>
          <div className="bg-accent text-accent-content grid h-20 w-32 place-content-center rounded">
            <a href="https://x.com/NTEmmerson">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
          </div>
          <div className="bg-secondary text-secondary-content grid h-20 w-32 place-content-center rounded">
            <a href="https://github.com/nathan-emmerson1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.42-1.305.763-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.405 1.022.006 2.048.139 3.005.405 2.29-1.553 3.297-1.23 3.297-1.23.654 1.653.241 2.873.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.217.694.825.577C20.565 22.092 24 17.594 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-6xl font-bold pb-7">About me</h1>

          <p className="py-3 text-xl">
            I come from a background with no formal coding education, but I've
            always had a passion for computers from a young age. Now, I've
            finally taken the leap by completing my Full-Stack Devlopment course
            in 2024.
          </p>
          <br></br>
          <p className="pt-1 text-xl">
            Attending the Dev Academy bootcamp has given me a much deeper
            technical understanding of software development and the importance
            of working with others using agile methodologies. The course also
            strongly emphasized the development and application of human skills.
            I fully embrace these values and have a strong commitment to
            kindness, empathy, and communication. In any workplace or situation.{' '}
          </p>
          <br></br>
          <p className="text-xl">
            I thrive in collaborative environments where I can contribute to
            innovative projects and learn from my peers. Working in a team fuels
            my creativity and drives me to deliver my best work. Problem-solving
            is at the heart of my approach I enjoy tackling complex challenges
            and finding effective, scalable solutions. This mindset not only
            enhances my technical skills but also fosters a culture of
            continuous improvement and innovation.
          </p>
          <a href="#projects">
            {' '}
            <button className="btn btn-primary">Projects</button>{' '}
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
