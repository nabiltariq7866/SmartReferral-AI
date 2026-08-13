import { useEffect, useState } from 'react'

export function usePersistentState<T>(key:string,initial:T){
  const[value,setValue]=useState<T>(()=>{try{const stored=sessionStorage.getItem(key);return stored?JSON.parse(stored):initial}catch{return initial}})
  useEffect(()=>{try{sessionStorage.setItem(key,JSON.stringify(value))}catch{/* storage may be unavailable */}},[key,value])
  return[value,setValue] as const
}
