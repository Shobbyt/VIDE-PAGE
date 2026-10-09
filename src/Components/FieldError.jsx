export default function FieldError({ name, errors }) {
  const error = errors[name];
  return error ? <p id={`${name}-error`} role="alert" className="mt-1 text-xs text-red-700">{error.message}</p> : null;
}
