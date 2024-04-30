import React from 'react';

export default function Cards(props) {
    return (
        <React.Fragment>
            <div className='card'>
                <section className='column-left'>
                    <img className="card-img" src={props.item1.coverImg} alt={props.item1.title} />
                </section>
                <section className='column-right'>
                    <h3>{props.item1.title}</h3>
                    <h4 className="card-date">{props.item1.date}</h4>
                    <span className='material-symbols-outlined'>Location: Mangalore</span>
                    <a href={props.item1.googleMapLink}>View on Google Maps</a>
                    <p>{props.item1.description}</p>
                </section>
            </div>
            <div className='card'>
                <section className='column-left'>
                    <img className="card-img" src={props.item2.coverImg} alt={props.item2.title} />
                </section>
                <section className='column-right'>
                    <h3>{props.item2.title}</h3>
                    <h4 className="card-date">{props.item2.date}</h4>
                    <span className='material-symbols-outlined'>Location: Mangalore</span>
                    <a href={props.item2.googleMapLink}>View on Google Maps</a>
                    <p>{props.item2.description}</p>
                </section>
            </div>
            <div className='card'>
                <section className='column-left'>
                    <img className="card-img" src={props.item3.coverImg} alt={props.item3.title} />
                </section>
                <section className='column-right'>
                    <h3>{props.item3.title}</h3>
                    <h4 className="card-date">{props.item3.date}</h4>
                    <span className='material-symbols-outlined'>Location: Mangalore</span>
                    <a href={props.item3.googleMapLink}>View on Google Maps</a>
                    <p>{props.item3.description}</p>
                </section>
            </div>
        </React.Fragment>
    );
}