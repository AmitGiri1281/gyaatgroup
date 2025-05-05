import QRCode from 'react-qr-code';

function QRCodeCard({ studentId, name, school, validUntil }) {
  return (
    <div className="card max-w-xs mx-auto">
      <div className="flex flex-col items-center">
        <div className="mb-4 p-3 bg-white rounded-lg border-2 border-gray-200">
          <QRCode value={`GREENRIDE-STUDENT-${studentId}`} size={180} />
        </div>
        
        <div className="w-full text-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-500">{school}</p>
          <p className="text-sm mt-2">Valid until: {validUntil}</p>
          <p className="text-xs text-gray-400 mt-1">ID: {studentId}</p>
        </div>
      </div>
    </div>
  );
}

export default QRCodeCard;