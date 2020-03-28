import React, { Component } from "react";
import { withLastLocation } from "react-router-last-location";

class DetailModal extends Component {
    constructor(props) {
        super(props);
        const {
            parentData = {},
            childData = {}
        } = props.location.state;
        const { title = 'No Title' } = parentData;
        const { category = '' } = childData;
        this.state = {
            parentTitle: title,
            ...childData
        }
    }

    /**
     * Trigger when unmount the component
     */
    componentWillUnmount() {
        document.removeEventListener("keyup", this.handleKeyUp);
    }

    componentDidMount() {
        if (!this.state.category) {
            this.props.history.push('/');
        }
    }

    /**
     * Trigger when click the escape button
     * @param {*} e
     */
    handleKeyUp = e => {
        if (e.keyCode === 27) this.closeModal();
    };

    /**
     * Trigger when click the save
     */

    closeModal = () => {
        this.props.history.push("/");
    };

    render() {
        const {
            parentTitle, category, title, metric_name
        } = this.state;
        return (
            <div className={'modal-okr'}>
                <div className={'modal-content'}>
                    <span className={'close'} onClick={this.closeModal}>&times;</span>
                    <div className={'form-container'}>
                        <table>
                            <tr>
                                <td>Parent Title</td>
                                <td>{parentTitle}</td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>{category}</td>
                            </tr>
                            <tr>
                                <td>Child Title</td>
                                <td>{title}</td>
                            </tr>
                            <tr>
                                <td>Metric Name</td>
                                <td>{metric_name}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default withLastLocation(DetailModal);