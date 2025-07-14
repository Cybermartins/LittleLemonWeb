import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';
import '@testing-library/jest-dom';

// Helper function to fill valid data
const fillValidForm = () => {
  fireEvent.change(screen.getByLabelText(/Full Name/i), {
    target: { value: 'Martins Obi' },
  });

  fireEvent.change(screen.getByLabelText(/Phone Number/i), {
    target: { value: '08012345678' },
  });

  fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
    target: { value: 'two' },
  });

  fireEvent.change(screen.getByLabelText(/Reservation Date/i), {
    target: { value: '2025-07-22' },
  });

  fireEvent.change(screen.getByLabelText(/Table Selection/i), {
    target: { value: 'A2' },
  });

  fireEvent.change(screen.getByLabelText(/Time Block/i), {
    target: { value: '12:00pm-2:00pm' },
  });
  
};

describe('BookingForm Component', () => {
  test('renders all required fields', () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Reservation Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Table Selection/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time Block/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Submit Booking Form/i)).toBeInTheDocument();
  });

  test('shows validation errors on empty submission', async () => {
    render(<BookingForm />);
    fireEvent.click(screen.getByLabelText(/Submit Booking Form/i));

    await waitFor(() => {
      expect(screen.getByText(/Full name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Please select number of guests/i)).toBeInTheDocument();
      expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Please choose a table/i)).toBeInTheDocument();
      expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
    });
  });

  test('blocks submission on blocked date', async () => {
    render(<BookingForm />);
    fillValidForm();
    fireEvent.change(screen.getByLabelText(/Reservation Date/i), {
      target: { value: '2025-07-20' }, // blocked date
    });

    fireEvent.click(screen.getByLabelText(/Submit Booking Form/i));

    await waitFor(() => {
      expect(screen.getByText(/This date is not available/i)).toBeInTheDocument();
    });
  });

  test('submits form with valid data', async () => {
    render(<BookingForm />);
    fillValidForm();

    fireEvent.click(screen.getByLabelText(/Submit Booking Form/i));

    await waitFor(() => {
      expect(screen.queryByText(/Full name is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Phone number is required/i)).not.toBeInTheDocument();
    });
  });
});