import { formatCamperField } from '../../utils/formatText';

const FEATURE_FIELDS = [
  'AC',
  'bathroom',
  'kitchen',
  'TV',
  'radio',
  'refrigerator',
  'microwave',
  'gas',
  'water',
];

const VehicleDetails = ({ camper }) => {
  const activeFeatures = FEATURE_FIELDS.filter((feature) => camper[feature]);

  const specs = [
    { label: 'Form', value: formatCamperField(camper.form) },
    { label: 'Length', value: camper.length },
    { label: 'Width', value: camper.width },
    { label: 'Height', value: camper.height },
    { label: 'Tank', value: camper.tank },
    { label: 'Consumption', value: camper.consumption },
  ];

  return (
    <div>
      <h2>Vehicle details</h2>

      <ul>
        <li>{formatCamperField(camper.transmission)}</li>
        <li>{formatCamperField(camper.engine)}</li>
        <li>{formatCamperField(camper.form)}</li>
        {activeFeatures.map((feature) => (
          <li key={feature}>{formatCamperField(feature)}</li>
        ))}
      </ul>

      <table>
        <tbody>
          {specs.map((spec) => (
            <tr key={spec.label}>
              <td>{spec.label}</td>
              <td>{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleDetails;