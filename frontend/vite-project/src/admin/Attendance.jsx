import React, { useEffect, useState } from 'react';
import PageLayout from '../user/components/PageLayout';

const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;
const API_BASE_URL = `${BACKEND_API_URL}/api/attendance`;

const Attendance = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    date: '',
    subject_name: '',
    faculty_name: '',
    time_from: '',
    time_to: '',
    attendance: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // ---------- Helpers ----------
  const resetForm = () => {
    setForm({
      date: '',
      subject_name: '',
      faculty_name: '',
      time_from: '',
      time_to: '',
      attendance: ''
    });
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ---------- API Calls ----------
  const fetchRecords = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(API_BASE_URL);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch attendance');
      }
      setRecords(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createRecord = async () => {
    try {
      setLoading(true);
      setError('');
      setSuccess('');
      const res = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to create record');
      }
      setSuccess('Attendance added successfully');
      await fetchRecords();
      resetForm();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateRecord = async () => {
    if (!editingId) return;
    try {
      setLoading(true);
      setError('');
      setSuccess('');
      const res = await fetch(`${API_BASE_URL}/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update record');
      }
      setSuccess('Attendance updated successfully');
      await fetchRecords();
      resetForm();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteRecord = async (id) => {
    if (!window.confirm('Are you sure you want to delete this record?')) return;
    try {
      setLoading(true);
      setError('');
      setSuccess('');
      const res = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to delete record');
      }
      setSuccess('Attendance deleted successfully');
      await fetchRecords();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ---------- Event Handlers ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateRecord();
    } else {
      await createRecord();
    }
  };

  const handleEditClick = (record) => {
    setEditingId(record.id);
    setForm({
      date: record.date || '',
      subject_name: record.subject_name || '',
      faculty_name: record.faculty_name || '',
      time_from: record.time_from || '',
      time_to: record.time_to || '',
      attendance: record.attendance || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ---------- Effects ----------
  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <PageLayout title="Attendance">
      <div className="px-4 pt-2 pb-4 bg-gray-50 min-h-screen">
        {/* Status Messages */}
        {error && (
          <div className="mb-3 rounded-md bg-red-100 text-red-800 px-3 py-2 text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-3 rounded-md bg-green-100 text-green-800 px-3 py-2 text-sm">
            {success}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-4 mb-4 space-y-3"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            {editingId ? 'Edit Attendance' : 'Add Attendance'}
          </h2>

          <div className="grid grid-cols-1 gap-3">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4AAED9]"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Subject Name
              </label>
              <input
                type="text"
                name="subject_name"
                value={form.subject_name}
                onChange={handleChange}
                placeholder="Programming Language"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4AAED9]"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Faculty Name
              </label>
              <input
                type="text"
                name="faculty_name"
                value={form.faculty_name}
                onChange={handleChange}
                placeholder="Mr. Saksham Jain"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4AAED9]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Time From
                </label>
                <input
                  type="time"
                  name="time_from"
                  value={form.time_from}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4AAED9]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Time To
                </label>
                <input
                  type="time"
                  name="time_to"
                  value={form.time_to}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4AAED9]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Attendance
              </label>
              <select
                name="attendance"
                value={form.attendance}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4AAED9]"
                required
              >
                <option value="">Select</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Late">Late</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#4AAED9] text-white text-sm font-medium px-4 py-2 rounded-md disabled:opacity-60"
            >
              {editingId ? 'Update' : 'Add'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="text-sm px-3 py-2 rounded-md border border-gray-300 text-gray-700"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* List */}
        <div className="space-y-3">
          {loading && records.length === 0 && (
            <p className="text-center text-sm text-gray-500">Loading...</p>
          )}

          {records.map((rec) => (
            <div
              key={rec.id}
              className="bg-white rounded-xl shadow-md p-3 flex flex-col gap-1"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">{rec.date}</p>
                  <h3 className="text-base font-semibold text-gray-900">
                    {rec.subject_name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {rec.time_from} - {rec.time_to}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    rec.attendance === 'Present'
                      ? 'bg-green-100 text-green-700'
                      : rec.attendance === 'Absent'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {rec.attendance}
                </span>
              </div>

              <div className="mt-1">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700">
                  {rec.faculty_name}
                </span>
              </div>

              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => handleEditClick(rec)}
                  className="text-xs px-3 py-1 rounded-md border border-blue-500 text-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteRecord(rec.id)}
                  className="text-xs px-3 py-1 rounded-md border border-red-500 text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {!loading && records.length === 0 && (
            <p className="text-center text-sm text-gray-500">
              No attendance records yet.
            </p>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Attendance;
