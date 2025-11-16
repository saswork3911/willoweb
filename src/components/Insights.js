export default function Insights() {
  const insights = [
    {
      category: 'Innovation',
      title: 'The Future of Sustainable Agriculture',
      excerpt: 'Exploring breakthrough technologies and methodologies that are reshaping modern farming for a sustainable future.',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600'
    },
    {
      category: 'Technology',
      title: 'Digital Transformation in Farming',
      excerpt: 'How IoT, AI, and big data are revolutionizing agricultural productivity and decision-making processes.',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600'
    },
    {
      category: 'Sustainability',
      title: 'Path to Carbon Neutrality',
      excerpt: 'Our comprehensive strategy and concrete actions toward achieving carbon neutrality by 2030.',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600'
    }
  ]

  return (
    <section className="py-16 sm:py-20 md:py-32 lg:py-[60px] px-4 sm:px-6 md:px-12 lg:px-20 bg-[#FAFAF5]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 lg:mb-20 gap-4">
        <h2 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight md:leading-[72px] text-[#1A4D2E] tracking-[-0.5px] md:tracking-[-1px] lg:tracking-[-1.5px]">
          Latest  <span className="text-[#f1ce31]">Insights</span>
        </h2>
        <a href="#" className="inline-flex items-center gap-2 font-montserrat font-bold text-sm sm:text-base md:text-lg text-[#A8D166] hover:gap-4 transition-all duration-300">
          View All
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {insights.map((insight, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_64px_rgba(26,77,46,0.15)] shadow-[0_8px_24px_rgba(26,77,46,0.08)] cursor-pointer group">
            <div className="w-full h-[180px] sm:h-[200px] md:h-[240px] lg:h-[280px] overflow-hidden">
              <img 
                src={insight.image}
                alt={insight.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="p-4 sm:p-6 md:p-8">
              <span className="inline-block py-1 sm:py-[6px] px-3 md:px-4 bg-[rgba(244,185,66,0.15)] text-[#F4B942] font-montserrat font-semibold text-xs uppercase tracking-[1px] rounded-md mb-3 md:mb-4">
                {insight.category}
              </span>
              
              <h3 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl leading-6 md:leading-8 text-[#1A4D2E] mb-2 md:mb-3">
                {insight.title}
              </h3>
              
              <p className="text-sm md:text-base leading-5 md:leading-[26px] text-[#666] mb-4 md:mb-5">
                {insight.excerpt}
              </p>
              
              <div className="flex justify-between items-center pt-4 md:pt-5 border-t-2 border-[#F0F0F0]">
                <span className="text-xs md:text-sm text-[#999]">
                  {insight.readTime}
                </span>
                <a href="#" className="inline-flex items-center gap-[6px] font-montserrat font-bold text-xs md:text-sm text-[#A8D166] group-hover:gap-3 transition-all duration-300">
                  Read More
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}