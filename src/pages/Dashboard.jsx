import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import InvoiceCard from '../components/invoice/InvoiceCard';

const Dashboard = () => {
  // State for storing the invoice list
  const [invoices, setInvoices] = useState([
    { id: 'RT3080', paymentDue: '19 Aug 2025', clientName: 'Jensen Huang', total: '1,800.90', status: 'paid' },
    { id: 'XM9141', paymentDue: '20 Sep 2025', clientName: 'Alex Rivera', total: '556.00', status: 'pending' },
  ]);

  // Function to Add a new invoice (Create)
  const addInvoice = () => {
    const newInv = {
      id: Math.random().toString(36).substr(2, 6).toUpperCase(),
      paymentDue: 'Next Month',
      clientName: 'New Client',
      total: '0.00',
      status: 'pending'
    };
    setInvoices([newInv, ...invoices]);
  };

  // Function to Delete an invoice (Delete)
  const deleteInvoice = (id) => {
    setInvoices(invoices.filter(inv => inv.id !== id));
  };

  return (
    <div style={{ 
      maxWidth: '730px', 
      margin: '0 auto', 
      width: '100%',
      boxSizing: 'border-box' 
    }}>
      {/* Header Section - Responsive spacing */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '40px',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <div>
          <h1 style={{ 
            fontSize: 'clamp(24px, 5vw, 32px)', 
            marginBottom: '4px',
            color: 'var(--text-main)' 
          }}>Invoices</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            {invoices.length === 0 ? 'No invoices' : `${invoices.length} invoices`}
          </p>
        </div>

        <button 
          onClick={addInvoice}
          style={{
            backgroundColor: 'var(--purple)',
            color: 'white',
            border: 'none',
            padding: '8px 16px 8px 8px',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '50%', 
            padding: '8px',
            display: 'flex'
          }}>
            <Plus size={16} color="var(--purple)" />
          </div>
          New <span className="hide-mobile">Invoice</span>
        </button>
      </header>

      {/* Invoice List Area */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {invoices.map(inv => (
          <div key={inv.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            width: '100%' 
          }}>
            <div style={{ flex: 1 }}>
              <InvoiceCard invoice={inv} />
            </div>
            <button 
              onClick={() => deleteInvoice(inv.id)}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#ec5757', 
                cursor: 'pointer', 
                padding: '8px',
                display: 'flex',
                alignItems: 'center'
              }}>
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {invoices.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '80px', padding: '0 20px' }}>
          <h2 style={{ color: 'var(--text-main)' }}>Nothing here</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Click the New button to get started and fill this list up!
          </p>
        </div>
      )}

      {/* Internal CSS for tiny screen hiding */}
      <style>{`
        @media (max-width: 350px) {
          .hide-mobile { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;