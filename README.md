# Project Name: 

## Project Description:  

## Live Site Link:

## Project Video:

## What I Learned New while Building This Project:
1. Different way to rendered list using map: 

way 1: using parenthesis :

```jsx
        {singleData.map(data => (
                    <div className='mb-10'>
                        <div className='mt-4 rounded-sm bg-white shadow p-4'>
                            <p className='font-medium pb-4'>Payment Failed - Card Declined</p>
                            <div>
                                <button className='btn bg-[#02A53B] text-white w-full'>Complete</button>
                            </div>
                        </div>
                    </div>
                ))}
```

way 2: using `<div>`;

```jsx

                {singleData.map(data => <div className='mb-10'>
                        <div className='mt-4 rounded-sm bg-white shadow p-4'>
                            <p className='font-medium pb-4'>Payment Failed - Card Declined</p>
                            <div>
                                <button className='btn bg-[#02A53B] text-white w-full'>Complete</button>
                            </div>
                        </div>
                    </div>
                )}
```

way 3: using fragment: 

```jsx
        {singleData.map(data => <>
                    <div className='mb-10'>
                        <div className='mt-4 rounded-sm bg-white shadow p-4'>
                            <p className='font-medium pb-4'>Payment Failed - Card Declined</p>
                            <div>
                                <button className='btn bg-[#02A53B] text-white w-full'>Complete</button>
                            </div>
                        </div>
                    </div>
                </>)}
```


## Challenges I faced while Building This Project:
1. I faced a lot of trouble designing two status bar cards, because they have a linear gradient with two vectors (one on the left and one on the right). I kept thinking about how to do that and tried different ways. After spending lots of time, I finally found the way:

```jsx
import React from 'react';
import vector1 from '../../assets/images/vector1.png'
import vector2 from '../../assets/images/vector2.png'

const StatusBar = () => {
    return (
        <div className='flex gap-6 justify-center px-5 md:px-10 xl:px-20'>
            <div className='relative text-white w-[708px] h-[250px] rounded-lg flex flex-col justify-center items-center bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>
                <img className='absolute left-0' src={vector1} alt="" />
                <p className='text-2xl'>In-Progress</p>
                <h1 className='font-semibold text-[60px]'>0</h1>
                <img className='absolute right-0' src={vector2} alt="" />
            </div>
            <div className='relative text-white w-[708px] h-[250px] rounded-lg flex flex-col justify-center items-center bg-linear-to-br from-[#54CF68] to-[#00827A]'>
                <img className='absolute left-0' src={vector1} alt="" />
                <p className='text-2xl'>Resolved</p>
                <h1 className='font-semibold text-[60px]'>0</h1>
                <img className='absolute right-0' src={vector2} alt="" />
            </div>
        </div >
    );
};

export default StatusBar;
```
here,
`bg-linear-to-br from-[#632EE3] to-[#9F62F2]`
- to-br → gradient flows towards bottom-right.
- from-[#632EE3] → color #632EE3 starts at top-left.
- to-[#9F62F2] → color #9F62F2 ends at bottom-right.

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
