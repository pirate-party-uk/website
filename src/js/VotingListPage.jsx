// VotingListPage.jsx
import React, { useState, useEffect, useContext } from "react";
import { Card, Container } from "react-bootstrap";

const VotingListPage = () => {
  const [votingElections, setVotingElections] = useState([]);

  useEffect(() => {
    const fetchElections = async () => {
      const elections = await firebase.fetchVotingElections();
      setVotingElections(elections);
    };

    fetchElections();
  }, [firebase]);

  return (
      <Container className="mt-5">
        <h1>Available Voting Elections</h1>
        {votingElections.map((election) => (
          <Card key={election.id} className="mb-3">
            <Card.Body>
              <Card.Title>{election.name}</Card.Title>
              <Card.Text>{election.description}</Card.Text>
              <a href={`/voting/${election.id}`}>Take Part</a>
            </Card.Body>
          </Card>
        ))}
      </Container>
  );
};

export default VotingListPage;