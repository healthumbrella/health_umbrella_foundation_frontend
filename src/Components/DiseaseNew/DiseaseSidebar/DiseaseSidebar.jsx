import React, { useState } from 'react';
import './DiseaseSidebar.css';
import { useNavigate } from 'react-router-dom';


const DiseaseSidebar = (props) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isWithDrugsExpanded, setIsWithDrugsExpanded] = useState(true);
    const [isWithoutDrugsExpanded, setIsWithoutDrugsExpanded] = useState(true);
    const [isLessKnownExpanded, setIsLessKnownExpanded] = useState(true);
    const navigate = useNavigate();
  
    const handleSearchChange = (event) => {
      const query = event.target.value.toLowerCase();
  
      if (!query) {
        setSearchResults([]);
        return;
      }
  
      let results = [];
  
      if (props.pathies.therapiesWithDrugs) {
        results = results.concat(props.pathies.therapiesWithDrugs.filter(therapy => therapy.name.toLowerCase().includes(query)));
      }
  
      if (props.pathies.therapiesWithoutDrugs) {
        results = results.concat(props.pathies.therapiesWithoutDrugs.filter(therapy => therapy.name.toLowerCase().includes(query)));
      }
  
      if (props.pathies.lessKnownTherapies) {
        results = results.concat(props.pathies.lessKnownTherapies.filter(therapy => therapy.name.toLowerCase().includes(query)));
      }
  
      setSearchResults(results);
    };
  
    return (
      <div className='disease_sidebar_outer'>
          <div>
              <h3 className='disease_title' onClick={() => navigate(`/diseases/${props.name}/`)}>
                  {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
              </h3>
          </div>
          <div className='search_container'>
              <input 
                type='text' 
                placeholder='Search' 
                className='search' 
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  handleSearchChange(event);
                }}
              />
              {searchQuery && (
                <span 
                  className="clear_icon" 
                  onClick={() => {
                    setSearchQuery('');
                    setSearchResults([]);
                  }}
                >
                  ✖
                </span>
              )}
          </div>

        {searchResults.length > 0 ? (
            <div className="search_results">
                {searchResults.map((result, index) => (
                    <p key={index} className='therapy' onClick={() => navigate(`/diseases/${props.name}/${result.name}`)}>
                        {result.name}
                    </p>
                ))}
            </div>
        ) : (
            <>
                <div>
                    <div className='therapy_title' onClick={() => setIsWithDrugsExpanded(!isWithDrugsExpanded)}>
                        Therapy with drugs <span className="arrow">{isWithDrugsExpanded ? '▼' : '▲'}</span>
                    </div>
                    {isWithDrugsExpanded && props.pathies.therapiesWithDrugs.map((therapy, index) => (
                        <p key={index} className='therapy' onClick={() => navigate(`/diseases/${props.name}/${therapy.name}`)}>
                            {therapy.name}
                        </p>
                    ))}
                </div>
                <div>
                    <div className='therapy_title' onClick={() => setIsWithoutDrugsExpanded(!isWithoutDrugsExpanded)}>
                        Therapy without drugs <span className="arrow">{isWithoutDrugsExpanded ? '▼' : '▲'}</span>
                    </div>
                    {isWithoutDrugsExpanded && props.pathies.therapiesWithoutDrugs.map((therapy, index) => (
                        <p key={index} className='therapy' onClick={() => navigate(`/diseases/${props.name}/${therapy.name}`)}>
                            {therapy.name}
                        </p>
                    ))}
                </div>
                <div>
                    <div className='therapy_title' onClick={() => setIsLessKnownExpanded(!isLessKnownExpanded)}>
                        Less known therapies <span className="arrow">{isLessKnownExpanded ? '▼' : '▲'}</span>
                    </div>
                    {isLessKnownExpanded && props.pathies.lessKnownTherapies.map((therapy, index) => (
                        <p key={index} className='therapy' onClick={() => navigate(`/diseases/${props.name}/${therapy.name}`)}>
                            {therapy.name}
                        </p>
                    ))}
                </div>
            </>
        )}
    </div>
  );
}

export default DiseaseSidebar;
