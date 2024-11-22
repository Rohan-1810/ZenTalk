import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import "./styles/Schemes.css"

function Schemes() {
    return (
        <div className='gschem'>
            <h2 className='heading'>Government Schemes</h2>
            <div className='scard'>
        <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>National Mental Health Programme (NMHP):</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">1982</Card.Subtitle>
        <Card.Text>
        Established to provide affordable mental health services.

Offers funding to state-level programs and District Mental Health Programs (DMHPs), which provide free counseling, medicines, and treatments.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PMJAY):
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2018</Card.Subtitle>
        <Card.Text>
        Provides free treatment for various health conditions, including mental health issues, under its insurance coverage for economically vulnerable individuals.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>KIRAN Helpline (Ministry of Social Justice & Empowerment):</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2020</Card.Subtitle>
        <Card.Text>
        Offers 24/7 mental health support, particularly for distress and psychological emergencies.

Aims to reduce stigma and improve accessibility.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card></div>
    <br></br>
    <div className='scard'>
        <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>National Trust for the Welfare of Persons with Autism, Cerebral Palsy, Mental Retardation, and Multiple Disabilities:</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">1999</Card.Subtitle>
        <Card.Text>
        Includes schemes like Niramaya Health Insurance Scheme for individuals with mental disabilities to cover medical expenses, including mental health support.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>Manodarpan Initiative (Under Atmanirbhar Bharat):</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2020</Card.Subtitle>
        <Card.Text>
        Aims to provide psychological support to students, teachers, and families via online counseling and wellness resources.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>Disability Pension Schemes (State-Specific):</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Early 2000s</Card.Subtitle>
        <Card.Text>
        Some state governments provide financial assistance to individuals suffering from severe mental illnesses under disability welfare schemes.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card></div>
    <br></br>
    <div className='scard'>
        <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>Employee Assistance Programs (EAP) in PSUs and Government Offices:</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Early 2000s</Card.Subtitle>
        <Card.Text>
        Focuses on workplace mental health, providing counseling and rehabilitation services.
        </Card.Text>
        <Button className="gbtn" variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
    </div>
    <hr></hr>
    <h2 className='heading'>NGOs</h2>
    <div className='scard'>
        <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>The Live Love Laugh Foundation (TLLLF)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2015</Card.Subtitle>
        <Card.Text>
        Focus: Spreading awareness about mental health, reducing stigma, and offering support to those in need.

        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>AASRA</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">1998</Card.Subtitle>
        <Card.Text>
        Focus: Suicide prevention through a 24/7 helpline and counseling services.Works for individuals in distress and those battling mental illnesses.

        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>Sangath</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">1996</Card.Subtitle>
        <Card.Text>
        Focus: Community-based mental health services, research, and capacity-building programs.Notable for programs addressing child development and adolescent mental health.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card></div>
    <br/>
    <div className='scard'>
        <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>The Banyan</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">1993</Card.Subtitle>
        <Card.Text>
        Focus: Rehabilitation and care for homeless individuals with mental illnesses.

Based in Chennai, with a strong focus on social integration and long-term care.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>Vandrevala Foundation</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2008</Card.Subtitle>
        <Card.Text>
        A 24/7 mental health helpline offering free telephonic counseling for people in crisis.

Operates nationwide and aims to make mental health support accessible.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>Snehi (Delhi)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">1994</Card.Subtitle>
        <Card.Text>
        Providing counseling and emotional support through schools and communities.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card></div>
    <br/>
    <div className='scard'>
        <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>Prafulta Psychological Services (Mumbai)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">1998</Card.Subtitle>
        <Card.Text>
        Offers counseling, assessments, workshops, and awareness campaigns.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>Anjali Mental Health Rights Organization (Kolkata)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2001</Card.Subtitle>
        <Card.Text>
        Advocacy for mental health rights and improving the quality of care in institutions.

        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }} className='card'>
      <Card.Body >
        <Card.Title>Manas Foundation (Delhi NCR)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Early 2000s</Card.Subtitle>
        <Card.Text>
        Mental health and gender equality through community outreach and corporate programs.
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card></div>
        </div>
    )
}

export default Schemes;
