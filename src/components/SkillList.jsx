import React from 'react'; 

function SkillList(props) {
    const files = [
        { 
            source:
                'images/icons/alpinejs-icon.png',
            skill:
                'Alpine Js',
        },
        { 
            source:
                'images/icons/bootstrap-icon.png',
            skill:
                'Bootstrap',
        },
        { 
            source:
                'images/icons/css-icon.png',
            skill:
                'CSS',
        },
        { 
            source:
                'images/icons/git-icon.png',
            skill:
                'GIT',
        },
        {
            source:
                'images/icons/github-icon.png',
            skill:
                'Github',
        },
        { 
            source:
                'images/icons/html5-icon.png',
            skill:
                'HTML5',
        },
        { 
            source:
                'images/icons/javascript-icon.png',
            skill:
                'Javascript',
        },
        { 
            source:
                'images/icons/jquery-icon.png',
            skill:
                'JQuery',
        },
        { 
            source:
                'images/icons/json-icon.png',
            skill:
                'Json',
        },
        { 
            source:
                'images/icons/reactjs-icon.png',
            skill:
                'ReactJs',
        },
        {
            id: 10,
            source:
                'images/icons/redux-icon.png',
            skill:
                'Redux',
        },
        { 
            source:
                'images/icons/tailwind-css-icon.png',
            skill:
                'Tailwind Css',
        },
        { 
            source:
                'images/icons/typescript-icon.png',
            skill:
                'Typscript',
        },
        {
            id:13,
            source:
                'images/icons/vuejs-icon.png',
            skill:
                'VueJs',
        },
    ]
  return (
    <div>
          <ul  className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-10 py-10">
              {files.map((file,i) => (
                  <li key={i} className='col-span-1 flex flex-col bg-white shadow-md'>
                      <img  className='mx-auto h-12 w-12 flex-shrink-0' src={file.source} alt="" />
                      <h3 className="mt-3 text-xl font-bold text-black text-center pb-4">{file.skill}</h3>
                 </li> 
              ))}
      </ul>
    </div>
  )
}

export default SkillList
