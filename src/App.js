import logo from './logo.svg';
import './App.css';
import Button from './utility/component/button'
import Row from './utility/component/row';

function App() {
      const handleSubmit = (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            console.log(formData)
          };
      return (
            <div className='FormContainer'>
                  <h2 className='Center'>INFORMIX DATABASE BACKUP</h2>
                  <h4 className="Header">Add Source Database Details</h4>
                  <form onSubmit={handleSubmit}>

                        <div className='FormRow'>
                              <Row className={'Label'} forLabel={'sourceHost'} text={'Host'} type={'text'} id={'sourceHost'} name={'sourceHost'} />
                              <Row className={'Label'} forLabel={'sourcePort'} text={'Port'} type={'text'} id={'sourcePort'} name={'sourcePort'} />
                        </div>

                        <div className='FormRow'>
                              <Row className={'Label'} forLabel={'sourceServerName'} text={'Server Name'} type={'text'} id={'sourceServerName'}
                                    name={'sourceServerName'} />
                              <Row className={'Label'} forLabel={'sourceDb'} text={'DB Name'} type={'text'} id={'sourceDb'}
                                    name={'sourceDb'} />
                        </div>

                        <div className='FormRow'>
                              <Row className={'Label'} forLabel={'sourceUserName'} text={'User Name'} type={'text'} id={'sourceUserName'}
                                    name={'sourceUserName'} />
                              <Row className={'Label'} forLabel={'sourcePwd'} text={'Password'} type={'text'} id={'sourcePwd'}
                                    name={'sourcePwd'} />
                        </div>
                        <Button id={'testConnection'} className={'ButtonLink Link'} text={'Test Connection'} />
                        <h4 className="Header">Add Target Details</h4>
                        <div className='FormRow'>
                              <Row className={'Label'} forLabel={'targetIp'} text={'Host'} type={'text'} id={'targetIp'}
                                    name={'targetIp'} />
                              <Row className={'Label'} forLabel={'targetLocation'} text={'Path'} type={'text'} id={'targetLocation'}
                                    name={'targetLocation'} />
                        </div>
                        <div className='FormRow'>
                              <Row className={'Label'} forLabel={'targetUserName'} text={'User Name'} type={'text'} id={'targetUserName'}
                                    name={'targetUserName'} />
                              <Row className={'Label'} forLabel={'targetPwd'} text={'Password'} type={'text'} id={'targetPwd'}
                                    name={'targetPwd'} />
                        </div>
                        <div className="FormRow">
                              <Button id='fullBackup' className='Button1' text={'Full Backup'} />
                              <Button id='incremental' className='ButtonDisabled' text={'Incremental'} />
                              <Button id='differential' className='ButtonDisabled' text={'Differential'} />
                              <Button id='pitr' className='ButtonDisabled' text={'Transaction Log'} />
                        </div>
                  </form>
            </div>
      );
}

export default App;
