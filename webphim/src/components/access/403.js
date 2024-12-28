import styled from 'styled-components';
function DenyAccess() {
    return (
        <DenyWraper>
            <div className="text-wrapper">
                <div className="title" data-content="404">
                    403 - ACCESS DENIED
                </div>

                <div className="subtitle">Oops, You don't have permission to access this page.</div>
                <div className="isi">
                    A web server may return a 403 Forbidden HTTP status code in response to a request from a client for
                    a web page or resource to indicate that the server can be reached and understood the request, but
                    refuses to take any further action. Status code 403 responses are the result of the web server being
                    configured to deny access, for some reason, to the requested resource by the client.
                </div>

                <div className="buttons">
                    <a className="button" href="/">
                        Go to homepage
                    </a>
                </div>
            </div>
        </DenyWraper>
    );
}

export default DenyAccess;
const DenyWraper = styled.div`





a {
  color: #EE4B5E !important;
  text-decoration:none;
}
a:hover {
  color: #FFFFFF !important;
  text-decoration:none;
}

.text-wrapper {
    height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: #white; 
}

.title {
    font-size: 5em;
    font-weight: 700;
    color: #EE4B5E;margin-top: 50px;
}

.subtitle {
    font-size: 40px;
    font-weight: 700;
    color: #1FA9D6;
    padding-top: 30px;
}
.isi {
    font-size: 18px;
    text-align: center;
    margin:30px;
    padding:20px;
    color: white;
}
.buttons {
    margin: 30px;
        font-weight: 700;
        border: 2px solid #EE4B5E;
        text-decoration: none;
        padding: 15px;
        text-transform: uppercase;
        color: #EE4B5E;
        border-radius: 26px;
        transition: all 0.2s ease-in-out;
        display: inline-block;
        
        .buttons:hover {
            background-color: #EE4B5E;
            color: white;
            transition: all 0.2s ease-in-out;
        }
  }
}
`;
