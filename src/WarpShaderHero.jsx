import { Warp } from "@paper-design/shaders-react"

export default function WarpShaderHero() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          colors={["hsl(200, 100%, 20%)", "hsl(160, 100%, 75%)", "hsl(180, 90%, 30%)", "hsl(170, 100%, 80%)"]}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-white text-5xl md:text-7xl font-sans font-light text-balance">
            One of a kind, just like you
          </h1>

          <p className="text-white/90 text-xl md:text-2xl font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Crafted in the UK, each custom watch is assembled by hand using an
            authentic Seiko movement and sapphire crystal
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
  <a
  href="https://s7watches.co.uk/collections/all"
  target="_top"
  rel="noopener noreferrer"
  className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105"
>
  Shop now
</a>

<a
  href="https://s7watches.co.uk/collections"
  target="_top"
  rel="noopener noreferrer"
  className="px-8 py-4 bg-white rounded-full text-gray-800 font-medium hover:scale-105 transition-transform duration-300"
>
  View collections
</a>
</div>
        </div>
      </div>
    </main>
  )
}
