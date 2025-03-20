import React from 'react';
import { BsDownload, BsTrash } from 'react-icons/bs';

function RecentReports() {
    const reports = [
        {
            id: 1,
            title: "Flood Risk Assessment - Coastal Region",
            date: "2024-03-17",
            type: "Flood",
            status: "High Risk"
        },
        {
            id: 2,
            title: "Earthquake Prediction - Northern Zone",
            date: "2024-03-16",
            type: "Earthquake",
            status: "Medium Risk"
        },
        {
            id: 3,
            title: "Tsunami Warning System Report",
            date: "2024-03-15",
            type: "Tsunami",
            status: "Low Risk"
        },
        {
            id: 4,
            title: "Landslide Risk Analysis - Mountain Region",
            date: "2024-03-14",
            type: "Landslide",
            status: "High Risk"
        }
    ];

    return (
        <div className="reports-container">
            <h2>Recent Reports</h2>
            <div className="reports-table-container">
                <table className="reports-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report) => (
                            <tr key={report.id}>
                                <td>{report.id}</td>
                                <td>{report.title}</td>
                                <td>{report.date}</td>
                                <td>{report.type}</td>
                                <td>
                                    <span className={`status-badge ${report.status.toLowerCase().replace(' ', '-')}`}>
                                        {report.status}
                                    </span>
                                </td>
                                <td className="action-buttons">
                                    <button className="download-btn" title="Download">
                                        <BsDownload />
                                    </button>
                                    <button className="delete-btn" title="Delete">
                                        <BsTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RecentReports; 