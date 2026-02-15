export default function Header() {
    return (
        <header className="header">
            <div className="height-max"></div>
            <div className="header-content">
                <h5 className="title-heading">New cars</h5>
                <h2 className="title">2025 Porsche</h2>

                <div className="header-boxes">
                    <div className="box">
                        <h4>Speed</h4>
                        <p>0-100 km/h in 5s</p>
                    </div>
                    <div className="box">
                        <h4>Power</h4>
                        <p>450 HP</p>
                    </div>
                    <div className="box">
                        <h4>Fuel</h4>
                        <p>10 L/100km</p>
                    </div>
                    <div className="box">
                        <h4>Seats</h4>
                        <p>5 People</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
