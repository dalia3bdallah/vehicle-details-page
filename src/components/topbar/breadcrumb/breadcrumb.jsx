import "./breadcrumb.css";

export default function BreadCrumb() {
    return (
        <div className="breadcrumb">
            <span className="crumb"><a href="#">Vehicles</a></span>
            <span className="separator">/</span>
            <span className="crumb"><a href="#">Vehicle details</a></span>
            <span className="separator">/</span>
            <span className="crumb current">Chevrolet Tahoe 2025</span>
        </div>
    )
}