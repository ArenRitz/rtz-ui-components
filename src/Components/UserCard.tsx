import * as React from 'react';
import '../index.css';
import ProfilePic from '../assets/user.jpg';
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

export interface Props {
    mode: string;
}

export function UserCard(props: Props) {
    return (
        <>
        {props.mode === 'card' && (
            <div className=' w-56 rounded-md h-72 flex flex-col items-center gradient-animation border-2 border-slate-600 '>
             
                <img src={ProfilePic} alt='Profile Picture' className='w-32 rounded-full border-2 border-slate-600 my-4' />
            
                <h3 className='text-2xl font-bold text-slate-600'>ArenRitz</h3>
                <p className='text-slate-200'>Full Stack Developer</p>
                <section className='flex flex-row my-6'>
                    <a href='https://www.rtz.rip' target='_blank' rel='noreferrer' className='text-slate-600 hover:text-slate-200'><BsGlobe className='text-2xl' /></a>
                    <a href='https://www.twitter.com' target='_blank' rel='noreferrer' className='text-slate-600 hover:text-slate-200 ml-4'><AiOutlineTwitter className='text-2xl' /></a>
                    <a href='https://www.github.com/ArenRitz' target='_blank' rel='noreferrer' className='text-slate-600 hover:text-slate-200 ml-4'><AiOutlineGithub className='text-2xl' /></a>
                    <a href='https://www.linkedin.com/in/arendolbakian/' target='_blank' rel='noreferrer' className='text-slate-600 hover:text-slate-200 ml-4'><AiOutlineLinkedin className='text-2xl' /></a>
                    <a href='https://www.instagram.com' target='_blank' rel='noreferrer' className='text-slate-600 hover:text-slate-200 ml-4'><AiOutlineInstagram className='text-2xl' /></a>
                </section>
            </div>
        )}

        {props.mode === 'cardloading' && (
            <div className=' w-56 rounded-md h-72 flex flex-col items-center gradient-animation border-2 border-slate-600'>
                <div className='w-32 h-32 my-4 animate-pulse bg-slate-600 rounded-full'></div>
                <div className='w-40 h-4 animate-pulse bg-slate-600 rounded-full mt-2'></div>
                <div className='w-28 h-4 animate-pulse bg-slate-600 rounded-full my-2'></div>
                
                <section className='flex flex-row mt-6'>
                    <div className='w-6 h-6 animate-pulse bg-slate-600 rounded-full '></div>
                    <div className='w-6 h-6 animate-pulse bg-slate-600 rounded-full ml-4'></div>
                    <div className='w-6 h-6 animate-pulse bg-slate-600 rounded-full ml-4'></div>
                    <div className='w-6 h-6 animate-pulse bg-slate-600 rounded-full ml-4'></div>
                    <div className='w-6 h-6 animate-pulse bg-slate-600 rounded-full ml-4'></div>
                </section>
            </div>
        )}


        </>
    );
}
