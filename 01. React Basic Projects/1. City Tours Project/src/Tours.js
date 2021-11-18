import React from 'react';


export default class Tours extends React.Component {

    state = {
        showInfo : false
    }

    toggleInfo = () => {
        this.setState({
            showInfo : !this.state.showInfo
        })
    }

    render() {
        const { id, img, city, title, about } = this.props.Tours;
        const { deleteTour } = this.props;
        return (
            <section className="allTours">
                <article className="tour">
                    <div className="img">
                        <img src={img} alt="New York" />
                        <span className="close-btn" onClick={() => deleteTour(id)}>
                            <i className="fas fa-window-close"></i>
                        </span>
                    </div>
                    <div className="tourInfo">
                        <h1>{city}</h1>
                        <h3>{title}</h3>
                        <h5>{about} <i className="fas fa-caret-square-down info-icon" onClick={this.toggleInfo}></i></h5>
                        {
                            this.state.showInfo && (
                                <p className="infoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo a atque in dolore unde excepturi quae doloremque tempore, facilis libero sequi impedit aperiam. Necessitatibus nobis dolor obcaecati provident corrupti?</p>
                            )
                        }
                    </div>
                </article>
            </section>
        )
    }
}