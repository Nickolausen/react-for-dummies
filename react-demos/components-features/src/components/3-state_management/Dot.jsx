export default function Dot({ position }) {
    return <div className="bg-danger" style={{ 
        width: "30px", 
        height: "30px", 
        borderRadius: "50% 50%",
        translate: `${position.x}px ${position.y}px`,
        position: "absolute"
    }}></div>
}