import experienceData from '../data/experience.json';
import agentechLogo from '../assets/logos/agentech-logo.jpg';
import highbitLogo from '../assets/logos/highbit-logo.jpg';
import kfueitLogo from '../assets/logos/kfueit-logo.png';
import hashlogicsLogo from '../assets/logos/hashlogics-logo.jpg';

const logoMap = {
  'agentech': agentechLogo,
  'highbit': highbitLogo,
  'kfueit': kfueitLogo,
  'hashlogics': hashlogicsLogo
};

const Experience = () => {
  return (
    <div className='px-5 sm:px-10 lg:px-20 my-20 md:my-32 overflow-hidden' id='experience'>
      <p className='text-2xl my-10 border-l-4 left-0 pl-5 border-Primary'>My Journey</p>
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-0.5 top-0 bottom-0 w-1 bg-Primary"></div>
        
        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <div key={item.id} className="relative">
              <div className="absolute left-2 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-Primary shadow-lg z-10"></div>
              
              <div className={`flex ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} justify-start`}>
                <div className={`w-full sm:w-5/12 ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:pr-0' : 'sm:pl-0'}`}>
                  <div className="relative p-4 shadow-custom-shadow rounded-lg space-y-3 hover:bg-Primary hover:text-white bg-PrimaryBG transition-all duration-300" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                    <div className="flex gap-3 items-start">
                      <a href={item.link} target='_blank' className="flex-shrink-0">
                        <img 
                          src={logoMap[item.logoKey] || item.logo} 
                          alt={item.company} 
                          className="w-12 h-12 object-contain rounded" 
                          style={item.logoStyle} 
                        />
                      </a>
                      <div className="flex-grow min-w-0">
                        <a href={item.link} target='_blank'>
                          <h3 className={`font-bold text-sm md:text-base leading-tight ${item.type === 'education' ? 'text-xs md:text-sm' : ''}`}>
                            {item.company}
                          </h3>
                        </a>
                        <h4 className="text-xs md:text-sm text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: item.position }}>
                        </h4>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-xs md:text-sm italic text-gray-500 border-t pt-2">
                      <span className="font-medium">{item.duration}</span>
                      <span>{item.location}</span>
                    </div>
                    
                    <div className="text-xs md:text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;