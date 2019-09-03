(function (d3) {
  'use strict';

  const svg = d3.select('svg');

  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const render = data => {
    const title = 'A Week in San Francisco';

    const xValue = d => d.timestamp;
    const xAxisLabel = 'Time';

    const yValue = d => d.temperature;
    const yAxisLabel = 'Temperature';

    const margin = { top: 60, right: 40, bottom: 88, left: 105 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleTime()
      .domain(d3.extent(data, xValue))
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain(d3.extent(data, yValue))
      .range([innerHeight, 0])
      .nice();

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xAxis = d3.axisBottom(xScale)
      .ticks(6)
      .tickSize(-innerHeight)
      .tickPadding(15);

    const yAxis = d3.axisLeft(yScale)
      .tickSize(-innerWidth)
      .tickPadding(10);

    const yAxisG = g.append('g').call(yAxis);
    yAxisG.selectAll('.domain').remove();

    yAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', -60)
        .attr('x', -innerHeight / 2)
        .attr('fill', 'black')
        .attr('transform', `rotate(-90)`)
        .attr('text-anchor', 'middle')
        .text(yAxisLabel);

    const xAxisG = g.append('g').call(xAxis)
      .attr('transform', `translate(0,${innerHeight})`);

    xAxisG.select('.domain').remove();

    xAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', 80)
        .attr('x', innerWidth / 2)
        .attr('fill', 'black')
        .text(xAxisLabel);

    const areaGenerator = d3.area()
      .x(d => xScale(xValue(d)))
      .y0(innerHeight)
      .y1(d => yScale(yValue(d)))
      .curve(d3.curveBasis);

    g.append('path')
        .attr('class', 'line-path')
        .attr('d', areaGenerator(data));

    g.append('text')
        .attr('class', 'title')
        .attr('y', -10)
        .text(title);
  };

  d3.csv('https://vizhub.com/curran/datasets/temperature-in-san-francisco.csv')
    .then(data => {
      data.forEach(d => {
        d.temperature = +d.temperature;
        d.timestamp = new Date(d.timestamp);
      });
      render(data);
    });

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHNlbGVjdCxcbiAgY3N2LFxuICBzY2FsZUxpbmVhcixcbiAgc2NhbGVUaW1lLFxuICBleHRlbnQsXG4gIGF4aXNMZWZ0LFxuICBheGlzQm90dG9tLFxuICBhcmVhLFxuICBjdXJ2ZUJhc2lzXG59IGZyb20gJ2QzJztcblxuY29uc3Qgc3ZnID0gc2VsZWN0KCdzdmcnKTtcblxuY29uc3Qgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyk7XG5jb25zdCBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xuXG5jb25zdCByZW5kZXIgPSBkYXRhID0+IHtcbiAgY29uc3QgdGl0bGUgPSAnQSBXZWVrIGluIFNhbiBGcmFuY2lzY28nO1xuICBcbiAgY29uc3QgeFZhbHVlID0gZCA9PiBkLnRpbWVzdGFtcDtcbiAgY29uc3QgeEF4aXNMYWJlbCA9ICdUaW1lJztcbiAgXG4gIGNvbnN0IHlWYWx1ZSA9IGQgPT4gZC50ZW1wZXJhdHVyZTtcbiAgY29uc3QgY2lyY2xlUmFkaXVzID0gNjtcbiAgY29uc3QgeUF4aXNMYWJlbCA9ICdUZW1wZXJhdHVyZSc7XG4gIFxuICBjb25zdCBtYXJnaW4gPSB7IHRvcDogNjAsIHJpZ2h0OiA0MCwgYm90dG9tOiA4OCwgbGVmdDogMTA1IH07XG4gIGNvbnN0IGlubmVyV2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICBjb25zdCBpbm5lckhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuICBcbiAgY29uc3QgeFNjYWxlID0gc2NhbGVUaW1lKClcbiAgICAuZG9tYWluKGV4dGVudChkYXRhLCB4VmFsdWUpKVxuICAgIC5yYW5nZShbMCwgaW5uZXJXaWR0aF0pO1xuICBcbiAgY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oZXh0ZW50KGRhdGEsIHlWYWx1ZSkpXG4gICAgLnJhbmdlKFtpbm5lckhlaWdodCwgMF0pXG4gICAgLm5pY2UoKTtcbiAgXG4gIGNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuICBcbiAgY29uc3QgeEF4aXMgPSBheGlzQm90dG9tKHhTY2FsZSlcbiAgICAudGlja3MoNilcbiAgICAudGlja1NpemUoLWlubmVySGVpZ2h0KVxuICAgIC50aWNrUGFkZGluZygxNSk7XG4gIFxuICBjb25zdCB5QXhpcyA9IGF4aXNMZWZ0KHlTY2FsZSlcbiAgICAudGlja1NpemUoLWlubmVyV2lkdGgpXG4gICAgLnRpY2tQYWRkaW5nKDEwKTtcbiAgXG4gIGNvbnN0IHlBeGlzRyA9IGcuYXBwZW5kKCdnJykuY2FsbCh5QXhpcyk7XG4gIHlBeGlzRy5zZWxlY3RBbGwoJy5kb21haW4nKS5yZW1vdmUoKTtcbiAgXG4gIHlBeGlzRy5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMtbGFiZWwnKVxuICAgICAgLmF0dHIoJ3knLCAtNjApXG4gICAgICAuYXR0cigneCcsIC1pbm5lckhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHJvdGF0ZSgtOTApYClcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnRleHQoeUF4aXNMYWJlbCk7XG4gIFxuICBjb25zdCB4QXhpc0cgPSBnLmFwcGVuZCgnZycpLmNhbGwoeEF4aXMpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2lubmVySGVpZ2h0fSlgKTtcbiAgXG4gIHhBeGlzRy5zZWxlY3QoJy5kb21haW4nKS5yZW1vdmUoKTtcbiAgXG4gIHhBeGlzRy5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMtbGFiZWwnKVxuICAgICAgLmF0dHIoJ3knLCA4MClcbiAgICAgIC5hdHRyKCd4JywgaW5uZXJXaWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAudGV4dCh4QXhpc0xhYmVsKTtcbiAgXG4gIGNvbnN0IGFyZWFHZW5lcmF0b3IgPSBhcmVhKClcbiAgICAueChkID0+IHhTY2FsZSh4VmFsdWUoZCkpKVxuICAgIC55MChpbm5lckhlaWdodClcbiAgICAueTEoZCA9PiB5U2NhbGUoeVZhbHVlKGQpKSlcbiAgICAuY3VydmUoY3VydmVCYXNpcyk7XG4gIFxuICBnLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluZS1wYXRoJylcbiAgICAgIC5hdHRyKCdkJywgYXJlYUdlbmVyYXRvcihkYXRhKSk7XG4gIFxuICBnLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAndGl0bGUnKVxuICAgICAgLmF0dHIoJ3knLCAtMTApXG4gICAgICAudGV4dCh0aXRsZSk7XG59O1xuXG5jc3YoJ2h0dHBzOi8vdml6aHViLmNvbS9jdXJyYW4vZGF0YXNldHMvdGVtcGVyYXR1cmUtaW4tc2FuLWZyYW5jaXNjby5jc3YnKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBkYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICBkLnRlbXBlcmF0dXJlID0gK2QudGVtcGVyYXR1cmU7XG4gICAgICBkLnRpbWVzdGFtcCA9IG5ldyBEYXRlKGQudGltZXN0YW1wKTtcbiAgICB9KTtcbiAgICByZW5kZXIoZGF0YSk7XG4gIH0pOyJdLCJuYW1lcyI6WyJzZWxlY3QiLCJzY2FsZVRpbWUiLCJleHRlbnQiLCJzY2FsZUxpbmVhciIsImF4aXNCb3R0b20iLCJheGlzTGVmdCIsImFyZWEiLCJjdXJ2ZUJhc2lzIiwiY3N2Il0sIm1hcHBpbmdzIjoiOzs7RUFZQSxNQUFNLEdBQUcsR0FBR0EsU0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOztFQUUxQixNQUFN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
