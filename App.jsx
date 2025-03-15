import React, { useState } from 'react';
import './App.css';
import FlipCard from './components/FlipCard';
import ProgressTracker from './components/ProgressTracker';

const cardData = [
  { question: 'What is a ticketing system?', answer: 'Helps track and resolve user issues systematically.', hint: 'Think about help desk tools.' },
  { question: 'What is active listening?', answer: 'Involves allowing the user to fully explain the issue and showing engagement.', hint: 'Focus on the listening part.' },
  { question: 'How do you verify connectivity in Windows?', answer: 'Use commands like ping and tracert.', hint: 'Common network troubleshooting commands.' },
  { question: 'What is a VPN?', answer: 'A Virtual Private Network creates a secure connection over an untrusted network.', hint: 'Think about secure connections.' },
  { question: 'What is remote desktop protocol (RDP)?', answer: 'A Microsoft protocol for accessing the graphical user interface (GUI) of a remote system.', hint: 'Used for remote access.' },
  { question: 'What does ipconfig do in Windows?', answer: 'Displays IP settings such as IPv4 address, subnet mask, and gateway.', hint: 'Network settings command.' },
  { question: 'What is the purpose of tracert?', answer: 'Traces the route packets take to reach a destination.', hint: 'Route tracing tool.' },
  { question: 'What is SSH?', answer: 'Secure Shell is a protocol for secure remote access over TCP port 22.', hint: 'Secure remote access protocol.' },
  { question: 'How do you verify connectivity in Linux?', answer: 'Use commands like ping, traceroute, and speedtest.', hint: 'Similar to Windows commands.' },
  { question: 'What is iPerf used for?', answer: 'Measures network throughput to determine bandwidth and performance.', hint: 'Network performance measurement.' },
  { question: 'What is SNMP?', answer: 'Simple Network Management Protocol is used to collect data from network devices.', hint: 'Network management protocol.' },
  { question: 'What is RMON?', answer: 'Remote Network Monitoring is used to monitor network traffic and performance.', hint: 'Network monitoring tool.' },
  { question: 'What is the purpose of a VPN gateway?', answer: 'Manages and controls the secure connection (tunnel) for a VPN.', hint: 'VPN management device.' },
  { question: 'What are the two types of VPNs?', answer: 'Site-to-Site VPN and Remote-Access VPN.', hint: 'Think about network connections.' },
  { question: 'What is the function of ncat (nc)?', answer: 'Tests port connectivity to determine if a specific port is open.', hint: 'Port connectivity tool.' },
  { question: 'What is the difference between bandwidth and throughput?', answer: 'Bandwidth is the theoretical max data transfer speed, while throughput is the actual speed affected by latency and congestion.', hint: 'Network speed terms.' },
  { question: 'What is latency?', answer: 'Delay caused by distance, network devices, and processing.', hint: 'Network delay term.' },
  { question: 'What is a network diagram?', answer: 'A visual representation of a network\'s devices and connections.', hint: 'Network visualization tool.' },
  { question: 'What is a client-server model?', answer: 'A network architecture where a client requests services from a server.', hint: 'Network architecture model.' },
  { question: 'What is the purpose of network automation?', answer: 'Automates repetitive tasks to improve efficiency, reduce human error, and lower operational costs.', hint: 'Network task automation.' },
  { question: 'What is the purpose of network segmentation?', answer: 'Divides a network into smaller parts to improve performance and security.', hint: 'Network division technique.' },
  { question: 'What is a network management system?', answer: 'A platform used to configure, monitor, and manage network performance.', hint: 'Network management platform.' },
  { question: 'What is a firewall?', answer: 'A security system that controls incoming and outgoing network traffic based on predetermined security rules.', hint: 'Network security device.' },
  { question: 'What is NAT?', answer: 'Network Address Translation allows multiple devices on a local network to share a single public IP address.', hint: 'Network address sharing.' },
  { question: 'What is a subnet?', answer: 'A subdivided section of a network designed to optimize performance and security.', hint: 'Network division.' },
  { question: 'What is VLAN?', answer: 'Virtual Local Area Network allows network administrators to partition a network into different segments.', hint: 'Network segmentation.' },
  { question: 'What is a MAC address?', answer: 'A unique identifier assigned to a network interface for communication on the physical network segment.', hint: 'Hardware address.' },
  { question: 'What is DNS?', answer: 'Domain Name System translates domain names to IP addresses.', hint: 'Internet directory service.' },
  { question: 'What is DHCP?', answer: 'Dynamic Host Configuration Protocol automatically assigns IP addresses to devices on a network.', hint: 'Automatic IP assignment.' },
  { question: 'What is a proxy server?', answer: 'An intermediary server that separates end users from the websites they browse.', hint: 'Intermediary server.' },
  { question: 'What is load balancing?', answer: 'Distributes network or application traffic across multiple servers to ensure no single server becomes overwhelmed.', hint: 'Traffic distribution.' },
  { question: 'What is QoS?', answer: 'Quality of Service prioritizes certain types of traffic to ensure reliable data transmission.', hint: 'Traffic prioritization.' },
  { question: 'What is an IDS?', answer: 'Intrusion Detection System monitors network traffic for suspicious activity and alerts administrators.', hint: 'Network security.' },
  { question: 'What is an IPS?', answer: 'Intrusion Prevention System monitors network traffic for suspicious activity and takes action to prevent it.', hint: 'Network security.' },
  { question: 'What is a honeypot?', answer: 'A security mechanism set to detect, deflect, or counteract attempts at unauthorized use of information systems.', hint: 'Decoy system.' },
  { question: 'What is a DMZ?', answer: 'Demilitarized Zone is a physical or logical subnetwork that contains and exposes an organization\'s external-facing services to an untrusted network.', hint: 'Network security zone.' },
  { question: 'What is a zero-day exploit?', answer: 'A vulnerability that is exploited before the developer has a chance to fix it.', hint: 'Unknown vulnerability.' },
  { question: 'What is phishing?', answer: 'A type of social engineering attack often used to steal user data, including login credentials and credit card numbers.', hint: 'Deceptive attack.' },
  { question: 'What is a DDoS attack?', answer: 'Distributed Denial of Service attack aims to disrupt normal traffic of a targeted server, service, or network by overwhelming it with a flood of internet traffic.', hint: 'Overwhelming attack.' },
  { question: 'What is encryption?', answer: 'The process of converting information or data into a code to prevent unauthorized access.', hint: 'Data protection.' },
  { question: 'What is a VPN tunnel?', answer: 'A secure connection between your device and the internet.', hint: 'Secure connection.' },
  { question: 'What is a certificate authority?', answer: 'An entity that issues digital certificates for use by other parties.', hint: 'Digital certificates issuer.' },
  { question: 'What is a digital signature?', answer: 'A mathematical scheme for verifying the authenticity of digital messages or documents.', hint: 'Verification.' },
  { question: 'What is multi-factor authentication?', answer: 'A security system that requires more than one method of authentication from independent categories of credentials to verify the user\'s identity.', hint: 'Enhanced security.' },
  { question: 'What is a hash function?', answer: 'A function that converts an input (or \'message\') into a fixed-length string of bytes.', hint: 'Data integrity.' },
  { question: 'What is a VPN client?', answer: 'Software that establishes and manages VPN connections.', hint: 'VPN software.' },
  { question: 'What is a network protocol?', answer: 'A set of rules and conventions for communication between network devices.', hint: 'Communication rules.' },
  { question: 'What is a router?', answer: 'A device that forwards data packets between computer networks.', hint: 'Network traffic director.' },
  { question: 'What is a switch?', answer: 'A device in a computer network that connects other devices together.', hint: 'Network device connector.' },
  { question: 'What is the OSI model?', answer: 'Open Systems Interconnection model is a conceptual framework used to understand network interactions in seven layers.', hint: 'Network model.' },
  { question: 'What is a packet?', answer: 'A unit of data that is transmitted over a network.', hint: 'Data unit.' },
  { question: 'What is a port?', answer: 'A virtual point where network connections start and end.', hint: 'Connection point.' },
  { question: 'What is a VPN server?', answer: 'A server that provides VPN services to clients.', hint: 'VPN provider.' },
  { question: 'What is a network topology?', answer: 'The arrangement of different elements (links, nodes, etc.) in a computer network.', hint: 'Network layout.' },
  { question: 'What is a VLAN trunk?', answer: 'A single network link that can carry multiple VLANs simultaneously.', hint: 'Multiple VLAN link.' },
  { question: 'What is a broadcast domain?', answer: 'A logical division of a computer network, in which all nodes can reach each other by broadcast at the data link layer.', hint: 'Network division.' },
  { question: 'What is a collision domain?', answer: 'A network scenario where one device\'s data can collide with another device\'s data.', hint: 'Network collision area.' },
  { question: 'What is a subnet mask?', answer: 'A 32-bit number that divides an IP address into network and host parts.', hint: 'IP address division.' },
  { question: 'What is ARP?', answer: 'Address Resolution Protocol translates IP addresses into MAC addresses.', hint: 'Address translation.' }
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [viewedCards, setViewedCards] = useState(new Set());
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState(new Set());

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    setShowAnswer(false);
    setUserAnswer('');
    setFeedback('');
    setViewedCards((prev) => new Set(prev).add(currentCardIndex));
  };

  const handleBackClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
    setShowAnswer(false);
    setUserAnswer('');
    setFeedback('');
  };

  const handleShuffleClick = () => {
    const shuffledData = cardData.sort(() => Math.random() - 0.5);
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setUserAnswer('');
    setFeedback('');
  };

  const handleCorrectClick = () => {
    setCorrectCount((prev) => prev + 1);
    handleNextClick();
  };

  const handleIncorrectClick = () => {
    setIncorrectCount((prev) => prev + 1);
    handleNextClick();
  };

  const handleSubmit = () => {
    if (userAnswer.trim().toLowerCase() === cardData[currentCardIndex].answer.trim().toLowerCase()) {
      setFeedback('Correct!');
      setStreak((prev) => {
        const newStreak = prev + 1;
        if (newStreak > longestStreak) {
          setLongestStreak(newStreak);
        }
        return newStreak;
      });
      handleCorrectClick();
    } else {
      setFeedback('Incorrect!');
      setStreak(0);
      handleIncorrectClick();
    }
  };

  const handleMasterClick = () => {
    setMasteredCards((prev) => new Set(prev).add(currentCardIndex));
    handleNextClick();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cisco CCST Flashcard App</h1>
        <p>Total Cards: {cardData.length}</p>
        <ProgressTracker viewedCards={viewedCards.size} totalCards={cardData.length} correctCount={correctCount} incorrectCount={incorrectCount} streak={streak} longestStreak={longestStreak} />
      </header>
      <FlipCard question={cardData[currentCardIndex].question} answer={cardData[currentCardIndex].answer} hint={cardData[currentCardIndex].hint} showAnswer={showAnswer} onCardClick={handleCardClick} />
      <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} placeholder="Enter your answer" />
      <button onClick={handleSubmit}>Submit</button>
      <p>{feedback}</p>
      <div className="controls">
        <button onClick={handleBackClick}>Back</button>
        <button onClick={handleNextClick}>Next</button>
        <button onClick={handleShuffleClick}>Shuffle</button>
        <button onClick={handleMasterClick}>Mastered</button>
      </div>
    </div>
  );
}

export default App;