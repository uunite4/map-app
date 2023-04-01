import React, { useState, useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const UiMap = () => {
	const mapContainer = useRef(null)
	const map = useRef(null)
	const [lng] = useState(34.798962)
	const [lat] = useState(32.07951)
	const [zoom] = useState(14)
	const [API_KEY] = useState(process.env.REACT_APP_API_KEY)

	useEffect(() => {
		if (map.current) return //stops map from intializing more than once
		map.current = new maplibregl.Map({
			container: mapContainer.current,
			style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
			center: [lng, lat],
			zoom: zoom,
		})
		map.current.addControl(new maplibregl.NavigationControl(), 'top-right')
		new maplibregl.Marker({ color: '#FF0000' })
			.setLngLat([34.798962, 32.07951])
			.addTo(map.current)
	})

	return (
		<>
			{/* <div className='zoom'>
				<p>+</p>
			</div> */}
			<div className='map-wrap'>
				<div ref={mapContainer} className='map'></div>
			</div>
		</>
	)
}

export default UiMap
