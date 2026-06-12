import './App.css';
import React from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App(){
    return (
        <section className="App">
            <TwitterFollowCard userName="haideediaz" name="Haidee Diaz"/>
            <TwitterFollowCard userName="nicoletazamora" name="Nicoleta Zamora"/>
            <TwitterFollowCard userName="yayamari" name="Yaya Mari"/>
        </section>
        
    )
}