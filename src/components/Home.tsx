import profilePic from '../assets/images/profile-pic.jpg'

function Home() {
  return (
    <div className="hero min-h-screen" id="home">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={profilePic}
          alt="profile page"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-6xl font-bold">Nathan Emmerson</h1>
          <h2 className="text-4xl font-bold">Full-Stack Developer</h2>
          <p className="py-6 text-2xl">
            Kia ora, I'm Nathan, welcome to my digital Portfolio. I'm a
            Gisborne-based NZ Developer passionate about crafting innovative
            solutions. I'm open to opportunities from potential employers or
            collaborators, so please feel free to reach out!
          </p>
          <a href="#about">
            {' '}
            <button className="btn btn-primary">About me</button>{' '}
          </a>
        </div>
      </div>
    </div>
  )
}
export default Home
