// import React from 'react';  // ← UNCOMMENT THIS
import { Grid, Card, CardContent, CardActions, Typography, Stack, Chip, Button } from '@mui/material';
import {
  FolderOpen,
  TrendingUp,
  ChatOutlined,
  Build,
  Lightbulb,
  Visibility,
  Code,
} from '@mui/icons-material';
import SectionWrapper from '../common/SectionWrapper';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  TrendingUp: <TrendingUp />,
  ChatOutlined: <ChatOutlined />,
  Build: <Build />,
  Lightbulb: <Lightbulb />,
};

function Projects() {
  const { projects } = portfolioData;
  // console.log('Projects data:', projects); // Debugging line to check the projects data

  return (
    <SectionWrapper id="projects" title="Featured Projects" icon={<FolderOpen color="secondary" />}>
      <Grid container spacing={3}>
        {projects.map((project, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={1}>
                  {iconMap[project.icon] || <FolderOpen />}
                  <Typography variant="h6" fontWeight={600}>
                    {project.title}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap">
                  {project.tech.map((t) => (
                    <Chip key={t} label={t} size="small" variant="outlined" />
                  ))}
                </Stack>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<Visibility />} href={project.demo}>
                  Demo
                </Button>
                <Button size="small" startIcon={<Code />} href={project.code}>
                  Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

export default Projects;