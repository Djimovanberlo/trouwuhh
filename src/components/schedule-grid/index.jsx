import { H2 } from '../typography'

const ScheduleGrid = ({ content }) => {
  const mappedContent = content
    .map(({ time, activity }) => {
      return [time, activity]
    })
    .flat()

  return (
    <div className='scheduleGrid'>
      {mappedContent.map((content, index) => (
        <H2 key={index}>{content}</H2>
      ))}
    </div>
  )
}

export default ScheduleGrid
