const express = require('express');
const app = express();

app.get('/api/allContent', (req, res) => {
  const content = {
    header: { logo: 'AWS Learner' },
    hero: { title: 'AWS Learning Journey', description: 'Showcasing my learning and projects' },
    about: { title: 'About', description: 'My journey with AWS and Cloud Technologies', items: ['VPC Setup', 'EC2 Management', 'CI/CD Pipelines', 'RDS Databases'] },
    features: {
      title: 'Skills & Projects',
      description: 'Key skills learned through AWS training',
      features: [
        { title: 'AWS Core Services', description: 'In-depth AWS knowledge' },
        { title: 'Web Development', description: 'Deploying apps on AWS' },
        { title: 'DevOps on AWS', description: 'CI/CD with AWS tools' }
      ]
    },
    contact: { title: 'Contact', description: 'Reach out for collaborations', email: 'you@example.com' },
    footer: { text: '© 2025 AWS Learner
