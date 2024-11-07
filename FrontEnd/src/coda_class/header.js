import React from 'react';
import logo_coda from './ressource/logo_coda.png';

const Header = () => {
    return (
        <header className='w-full flex items-center justify-center'>
            <div className='flex items-center mt-4 p-2 w-150 rounded-full bg-black bg-opacity-50'>
                
                    <img src={logo_coda} alt="Logo Coda" className="w-auto h-12  shadow-xl" />
            

                <nav className='flex gap-5 mt-5 mb-2 px-6'>
                    <select defaultValue="Front-end" className="bg-transparent border-none rounded-xl w-28">
                        <option className='hidden'>Front-end</option> 
                        <option className='w-full' value="option1">Option 1</option>
                        <option className='w-full' value="option2">Option 2</option>
                        <option className='w-full' value="option3">Option 3</option>
                    </select>

                    <select defaultValue="Back-end" className="bg-transparent border-none rounded-xl w-28">
                        <option className='hidden'>Back-end</option>
                        <option className='w-full' value="option1">Option 1</option>
                        <option className='w-full' value="option2">Option 2</option>
                        <option className='w-full' value="option3">Option 3</option>
                    </select>

                    <select defaultValue="Design" className="bg-transparent border-none rounded-xl w-28">
                        <option className='hidden'>Design</option>
                        <option className='w-full' value="option1">Option 1</option>
                        <option className='w-full' value="option2">Option 2</option>
                        <option className='w-full' value="option3">Option 3</option>
                    </select>

                    <select defaultValue="Conseil" className="bg-transparent border-none rounded-xl w-28">
                        <option className='hidden'>Conseil</option>
                        <option className='w-full' value="option1">Option 1</option>
                        <option className='w-full' value="option2">Option 2</option>
                        <option className='w-full' value="option3">Option 3</option>
                    </select>

                    <select defaultValue="Autre" className="bg-transparent border-none rounded-xl w-28">
                        <option className='hidden'>Autre</option>
                        <option className='w-full' value="option1">Option 1</option>
                        <option className='w-full' value="option2">Option 2</option>
                        <option className='w-full' value="option3">Option 3</option>
                    </select>

                    <button className=''>Connexion</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
