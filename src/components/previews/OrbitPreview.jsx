import { Command, LayoutGrid, Wallet, BarChart3 } from 'lucide-react'

export default function OrbitPreview() {
  return (
    <div className="orbit-window" aria-hidden="true">
      <aside className="mock-sidebar">
        <div className="mock-logo">
          <Command size={18} />
          <b>orbit</b>
        </div>
        <div className="mock-nav active">
          <LayoutGrid size={12} /> Overview
        </div>
        <div className="mock-nav">
          <Wallet size={12} /> Transactions
        </div>
        <div className="mock-nav">
          <BarChart3 size={12} /> Analytics
        </div>
        <div className="mock-account">
          AM <span>Alex Morgan</span>
        </div>
      </aside>
      <div className="mock-main">
        <div className="flex items-center justify-between">
          <span className="mock-overline">YOUR WORKSPACE</span>
          <span className="mock-avatar">A</span>
        </div>
        <h4>
          Good morning, Alex <span>☀</span>
        </h4>
        <p>Here’s how your money is doing today.</p>
        <div className="mock-stats">
          <div>
            <small>Total balance</small>
            <strong>
              $24,680<span>.00</span>
            </strong>
            <em>↗ 12.8% this month</em>
          </div>
          <div>
            <small>Monthly income</small>
            <strong>
              $8,450<span>.00</span>
            </strong>
            <em>↗ 6.2% this month</em>
          </div>
        </div>
        <div className="chart-title">
          <b>Cash flow</b>
          <span>This month⌄</span>
        </div>
        <div className="bar-chart">
          {[38, 58, 46, 76, 52, 90, 65, 78, 54, 95, 73, 85].map((height, i) => (
            <div key={i}>
              <i style={{ height: `${height}%` }} />
              <i style={{ height: `${height * 0.57}%` }} />
            </div>
          ))}
        </div>
        <div className="chart-labels">
          <span>JAN</span>
          <span>FEB</span>
          <span>MAR</span>
          <span>APR</span>
          <span>MAY</span>
          <span>JUN</span>
        </div>
      </div>
    </div>
  )
}
