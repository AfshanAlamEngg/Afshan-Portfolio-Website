// import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Work } from '@mui/icons-material';
import SectionWrapper from '../common/SectionWrapper';
import { portfolioData } from '../../data/portfolioData';

function Experience() {
  const { experience, education } = portfolioData;

  return (
    <SectionWrapper id="experience" title="Experience & Education" icon={<Work color="secondary" />}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            💼 Experience
          </Typography>
          {experience.map((exp, idx) => (
            <Card key={idx} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle2" color="secondary.main">
                  {exp.company}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {exp.year}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {exp.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            🎓 Education
          </Typography>
          {education.map((edu, idx) => (
            <Card key={idx}>
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle2" color="secondary.main">
                  {edu.school}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {edu.year}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {edu.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Experience;