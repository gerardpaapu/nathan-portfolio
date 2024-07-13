function NeibourGood() {
  return (
    <div
      className="hero min-h-screen bg-blue-400"
      style={{
        backgroundImage:
          'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <div className="pr-8 content-center">
            <img
              src="./images/neibourgoodslogo.png"
              alt="neiobourgoodlogo"
            ></img>
          </div>

          <h1 className="mb-5 text-5xl font-bold">Group Project</h1>
          <p className="mb-5  text-">
            In our recent project, our team used a tech stack consisting of
            Prisma, React.js, Next.js, and TypeScript. We aimed to create an app
            that connects the local community with a network of skilled
            professionals. One feature we considered was allowing users to have
            a bio that could be linked within the database and updated using
            useMutation in React Query. Through this group project, I've had the
            opportunity to learn and work with Next.js, which has been an
            enriching experience.
          </p>
          <a href="https://github.com/nathan-emmerson1/Neighbor-Goods">
            <button className="btn btn-primary">Github</button>{' '}
          </a>
          <a href="https://neighbour-goods.vercel.app/">
            <button className="btn btn-primary">Preview</button>{' '}
          </a>
          <a href="/projects">
            <button className="btn btn-primary">Home</button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default NeibourGood
