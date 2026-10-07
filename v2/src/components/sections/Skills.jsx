// import React from 'react';
import { Grid, Card, Stack, Typography, LinearProgress, Box } from '@mui/material';
import {
  Code,
  Storage,
  DesignServices,
  GitHub as GitHubIcon,
  Language,
} from '@mui/icons-material';
import SectionWrapper from '../common/SectionWrapper';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Code: <Code />,
  Storage: <Storage />,
  DesignServices: <DesignServices />,
  GitHub: <GitHubIcon />,
  Language: <Language />,
};

function Skills() {
  const { skills } = portfolioData;

  return (
    <SectionWrapper id="skills" title="Skills & Proficiency" icon={<Code color="secondary" />}>
      <Grid container spacing={3}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <Card variant="outlined" sx={{ p: 2, backgroundColor: 'background.paper' }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                {iconMap[skill.icon] || <Code />}
                <Typography variant="body1" fontWeight={500}>
                  {skill.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  {skill.level}%
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{ mt: 1, height: 8, borderRadius: 4 }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

export default Skills;