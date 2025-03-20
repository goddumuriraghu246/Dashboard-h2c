import React from "react";
import {
  BsFillExclamationTriangleFill,
  BsFillMapFill,
  BsFillCloudRainFill,
  BsFillGeoAltFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

function Home() {
  const riskData = [
    {
      name: "Flood",
      highRisk: 8,
      mediumRisk: 12,
      lowRisk: 15,
    },
    {
      name: "Earthquake",
      highRisk: 5,
      mediumRisk: 10,
      lowRisk: 18,
    },
    {
      name: "Tsunami",
      highRisk: 3,
      mediumRisk: 7,
      lowRisk: 20,
    }
  ];

  const cardData = [
    {
      name: "HIGH RISK ZONES",
      value: 8,
      icon: <BsFillExclamationTriangleFill />,
      color: "#ef4444"
    },
    {
      name: "MONITORED LOCATIONS",
      value: 45,
      icon: <BsFillMapFill />,
      color: "#3b82f6"
    },
    {
      name: "WEATHER ALERTS",
      value: 12,
      icon: <BsFillCloudRainFill />,
      color: "#f59e0b"
    },
    {
      name: "EVACUATION ROUTES",
      value: 15,
      icon: <BsFillGeoAltFill />,
      color: "#10b981"
    },
  ];

  return (
    <main className="main-container">
      {/* Dashboard Title */}
      <div className="main-title">
        <h3>EARLY DISASTER PREDICTION DASHBOARD</h3>
      </div>

      {/* Cards Section */}
      <div className="main-cards">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <span className="card_icon" style={{ background: card.color }}>
                {card.icon}
              </span>
            </div>
            <h1>{card.value}</h1>
            <p className="card-name">{card.name}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="charts">
        {/* Bar Chart */}
        <div className="chart-container">
          <h3>Risk Assessment by Disaster Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={riskData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Legend 
                wrapperStyle={{
                  padding: "20px",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                }}
              />
              <Bar dataKey="highRisk" fill="#ef4444" name="High Risk" radius={[4, 4, 0, 0]} />
              <Bar dataKey="mediumRisk" fill="#f59e0b" name="Medium Risk" radius={[4, 4, 0, 0]} />
              <Bar dataKey="lowRisk" fill="#10b981" name="Low Risk" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="chart-container">
          <h3>Dashboard Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={cardData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={60}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  name
                }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {value}
                    </text>
                  );
                }}
              >
                {cardData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                wrapperStyle={{
                  padding: "20px",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Home;