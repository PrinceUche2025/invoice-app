import React from 'react';

const InvoiceCard = ({ invoice }) => {
  return (
    <div style={{
      backgroundColor: 'var(--card-bg)', 
      padding: '16px 24px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '16px',
      border: '1px solid transparent',
      transition: '0.3s'
    }}>
      <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>
        <span style={{ color: '#7E88C3' }}>#</span>{invoice.id}
      </span>
      <span style={{ color: 'var(--text-secondary)' }}>Due {invoice.paymentDue}</span>
      <span style={{ color: 'var(--text-secondary)' }}>{invoice.clientName}</span>
      <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-main)' }}>
        £{invoice.total}
      </span>
      
      <div style={{
        padding: '12px',
        borderRadius: '6px',
        width: '100px',
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: invoice.status === 'paid' ? 'rgba(51, 214, 159, 0.1)' : 'rgba(255, 143, 0, 0.1)',
        color: invoice.status === 'paid' ? '#33D69F' : '#FF8F00'
      }}>
        ● {invoice.status}
      </div>
    </div>
  );
};

export default InvoiceCard;