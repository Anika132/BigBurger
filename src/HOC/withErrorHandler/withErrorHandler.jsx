import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux';
import errorImg from '../../assests/images/404.gif';
import classes from './withErrorHandler.css'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }
        render() {
            let errorDiv = null;
            if (this.state.error) {
                errorDiv = (
                    <div className={classes.Modal}>
                        <img src={errorImg} alt="" />
                        <p><span role="img" aria-label="">😕</span>&nbsp;{this.state.error.message} !!&nbsp;<span role="img" aria-label="">😕</span></p>
                    </div>
                )
            }
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {errorDiv}
                    </Modal>

                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;