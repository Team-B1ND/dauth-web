import * as S from './style'
import { BarChart, People } from '@b1nd/dds-web';
import { useEffect, useRef } from 'react';
import * as Chart from 'chart.js';

Chart.Chart.register(
  Chart.ArcElement,
  Chart.Tooltip,
  Chart.Legend,
  Chart.CategoryScale,
  Chart.LinearScale,
  Chart.DoughnutController
);

const Graph = () => {
  const frontendChartRef = useRef<HTMLCanvasElement>(null);
  const backendChartRef = useRef<HTMLCanvasElement>(null);
  const frontendChartInstance = useRef<Chart.Chart | null>(null);
  const backendChartInstance = useRef<Chart.Chart | null>(null);

  useEffect(() => {
    if (frontendChartRef.current) {
      const ctx = frontendChartRef.current.getContext('2d');
      if (ctx) {
        if (frontendChartInstance.current) {
          frontendChartInstance.current.destroy();
        }

        frontendChartInstance.current = new Chart.Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['React', 'Vue', 'Angular', 'Next.js'],
            datasets: [{
              data: [45, 25, 15, 15],
              backgroundColor: [
                '#0083F0', // React
                '#4FC08D', // Vue
                '#DD0031', // Angular
                '#000000', // Next.js
              ],
              borderWidth: 0,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  padding: 20,
                  usePointStyle: true,
                  font: {
                    size: 13
                  },
                  color: '#AAA'
                }
              }
            }
          }
        } as any);
      }
    }

    if (backendChartRef.current) {
      const ctx = backendChartRef.current.getContext('2d');
      if (ctx) {
        if (backendChartInstance.current) {
          backendChartInstance.current.destroy();
        }

        backendChartInstance.current = new Chart.Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Spring', 'Express', 'Django', 'Nest.js'],
            datasets: [{
              data: [40, 30, 20, 10],
              backgroundColor: [
                '#00BF40', // Spring
                '#68A063', // Express
                '#092E20', // Django
                '#E0234E', // Nest.js
              ],
              borderWidth: 0,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  padding: 20,
                  usePointStyle: true,
                  font: {
                    size: 13
                  },
                  color: '#AAA'
                }
              }
            }
          }
        } as any);
      }
    }

    return () => {
      if (frontendChartInstance.current) {
        frontendChartInstance.current.destroy();
      }
      if (backendChartInstance.current) {
        backendChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <S.SectionContainer>
      <S.SectionTitle>
        <BarChart/>
        그래프
      </S.SectionTitle>
      <S.GraphGrid>
        <S.GraphCard>
          <S.GraphHeader>
            <People color='labelNormal'/>
            <S.GraphTitle>프론트엔드 프레임워크</S.GraphTitle>
          </S.GraphHeader>
          <S.ChartContainer>
            <canvas ref={frontendChartRef}></canvas>
          </S.ChartContainer>
        </S.GraphCard>
        <S.GraphCard>
          <S.GraphHeader>
            <People color='labelNormal'/>
            <S.GraphTitle>백엔드 프레임워크</S.GraphTitle>
          </S.GraphHeader>
          <S.ChartContainer>
            <canvas ref={backendChartRef}></canvas>
          </S.ChartContainer>
        </S.GraphCard>
      </S.GraphGrid>
    </S.SectionContainer>
  );
};

export default Graph;