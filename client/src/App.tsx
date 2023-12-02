// App.tsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect here
import { Outlet } from 'react-router-dom';
import { Header2 } from './Components/Header';

const App: React.FC = () => {   
    const [search, setSearch] = useState(false);
    const [accessAlert, setAccessAlert] = useState('');
    const [isTeacher, setIsTeacher] = useState(false);

    // Function to update isTeacher state
    const updateTeacherStatus = (status: boolean) => {
        console.log("App Teacher status updated to:", status); // Debugging
        setIsTeacher(status);
    };

    // useEffect to log changes in isTeacher state
    useEffect(() => {
        console.log("App level isTeacher:", isTeacher);
    }, [isTeacher]);

    return (
        <> {/* Wrap your components with TeacherProvider */}
            <Header2 
                searchs={search} 
                setSearch={setSearch} 
                accessAlert={accessAlert} 
                setAccessAlert={setAccessAlert}
            />
            <Outlet context={{ setSearch, setAccessAlert, isTeacher }}/>
        </>
    );
}

export default App;
