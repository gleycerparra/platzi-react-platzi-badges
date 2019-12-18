import React from 'react';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: 'Gleycer',
            lastName: 'Parra',
            email: 'gleycerparra@gmail.com',
            jobTitle: 'Javascript Fullstack Developer',
            twitter: 'gleycerparra',
            avatarUrl: 'https://www.gravatar.com/avatar?d=identicon'
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return <div>
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="header" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            email={this.state.form.email}
                            jobTitle={this.state.form.jobTitle}
                            twitter={this.state.form.twitter}
                            avatarUrl={this.state.form.avatarUrl}
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BadgeNew;