import {useEffect} from "react"
import { useDispatch, useSelector} from "react-redux"

import { selectTrendingSidebar, fetchPopular } from "./trendingSideBarSlice"
import { AppDispatch } from "../../app/store"

export const TrendingSiderbar = () =>{
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() =>{
        dispatch(fetchPopular())
    }, [dispatch])
    

    const trendingSidebar = useSelector(selectTrendingSidebar)

    return (
        <h1>Something</h1>
    )
}