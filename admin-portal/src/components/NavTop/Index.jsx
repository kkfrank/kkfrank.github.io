import React, { Component } from 'react'
import connection from '../../api/http'
import './Index.scss'

export default class NavTop extends Component{
    constructor(props){
        super(props)
        this.state={
            isLogoutVisible: false
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount(){
        this.welcomeRef.onmouseover =() => {
            this.setState({
                isLogoutVisible: true
            })
        }
        this.welcomeRef.onmouseout = (ev) => {
            if(!ev.relatedTarget || ev.relatedTarget && ev.relatedTarget.className.indexOf('logout')<0){
                this.setState({
                    isLogoutVisible: false
                })
            }
        }

        this.logoutRef.onmouseout = (ev)=> {
            this.setState({
                isLogoutVisible: false
            })
        }
    }

    handleLogout(){
        connection.post('/user/logout.do')
            .then(res=>{
                window.localStorage.removeItem('current_user')
                window.location.href = '/login';
            })
    }

    render(){
        const user = JSON.parse(window.localStorage.getItem('current_user'));
        const { isLogoutVisible } = this.state
        if(!user){
            window.location.href = '/login';
            return <div></div>
        }
        return(
            <div className="nav-top">
                <div className="welcome" ref={(el)=>{this.welcomeRef=el}}>
                    <span className='fa fa-user'/>
                    <span className='ml5 mr5'>欢迎 {user && user.username}</span>
                    <span className='fa fa-caret-down'/>
                </div>
                <div ref={el=>this.logoutRef=el}
                     className={`logout ${isLogoutVisible? '' : 'hide'}`}
                     onClick={this.handleLogout}>
                    <i className='fa fa-sign-out mr5'/>
                    退出登录
                </div>
            </div>
        )
    }
}