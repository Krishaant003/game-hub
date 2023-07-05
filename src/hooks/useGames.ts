import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import useData from './useData';
import { Genre } from './useGenre';
import { GameQuery } from '../App';

export interface platform
{
  id : number
  name : string
  slug: string
}


export interface Game {
    id: number;
    name: string;
    background_image : string
    parent_platforms:{platform : platform}[]
    metacritic : number
    rating_top:number;
    
  }
  
  
const useGames = (gamequery : GameQuery) => 
    
    useData<Game>("/games" ,
    {params : {
      genres: gamequery.genre?.id , 
      platforms: gamequery.platform?.id,
      ordering: gamequery.sortOrder,
      search: gamequery.searchText,
    }},
    [gamequery])


export default useGames