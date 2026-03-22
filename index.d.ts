export interface DatasetManifestSample {
  sampleName: SampleName
  circuitKey: string
  circuitId: string
  stepsToPortPointSolve: number
}

export interface DatasetManifest {
  effort: number
  sampleCount: number
  samples: DatasetManifestSample[]
}

export interface Point2D {
  x: number
  y: number
}

export interface HypergraphPortData {
  portId: string
  x: number
  y: number
  z: number
  distToCentermostPortOnZ: number
}

export interface HypergraphPort {
  portId: string
  region1Id: string
  region2Id: string
  d: HypergraphPortData
}

export interface HypergraphRegionData {
  capacityMeshNodeId: string
  center: Point2D
  width: number
  height: number
  layer: "top"
  availableZ: Array<0 | 1>
  _containsObstacle?: boolean
  _containsTarget?: boolean
}

export interface HypergraphRegion {
  regionId: string
  pointIds: string[]
  d: HypergraphRegionData
}

export interface HypergraphConnection {
  connectionId: string
  startRegionId: string
  endRegionId: string
  mutuallyConnectedNetworkId: string
}

export interface SolvedRoutePathNode {
  portId: string
  g: number
  h: number
  f: number
  hops: number
  ripRequired: boolean
  nextRegionId: string
  lastPortId?: string
  lastRegionId?: string
}

export interface SolvedRoute {
  path: SolvedRoutePathNode[]
  connection: HypergraphConnection
  requiredRip: boolean
}

export interface HypergraphSample {
  ports: HypergraphPort[]
  regions: HypergraphRegion[]
  connections: HypergraphConnection[]
  solvedRoutes: SolvedRoute[]
}

export type SampleName =
  | "sample001"
  | "sample002"
  | "sample003"
  | "sample004"
  | "sample005"
  | "sample006"
  | "sample007"
  | "sample008"
  | "sample009"
  | "sample010"
  | "sample011"
  | "sample012"
  | "sample013"
  | "sample014"
  | "sample015"
  | "sample016"
  | "sample017"
  | "sample018"
  | "sample019"
  | "sample020"
  | "sample021"
  | "sample022"
  | "sample023"
  | "sample024"
  | "sample025"
  | "sample026"
  | "sample027"
  | "sample028"
  | "sample029"
  | "sample030"
  | "sample031"
  | "sample032"
  | "sample033"
  | "sample034"
  | "sample035"
  | "sample036"
  | "sample037"
  | "sample038"
  | "sample039"
  | "sample040"
  | "sample041"
  | "sample042"
  | "sample043"
  | "sample044"
  | "sample045"
  | "sample046"
  | "sample047"
  | "sample048"
  | "sample049"
  | "sample050"
  | "sample051"
  | "sample052"
  | "sample053"
  | "sample054"
  | "sample055"
  | "sample056"
  | "sample057"
  | "sample058"
  | "sample059"
  | "sample060"
  | "sample061"
  | "sample062"
  | "sample063"
  | "sample064"
  | "sample065"
  | "sample066"
  | "sample067"
  | "sample068"
  | "sample069"
  | "sample070"
  | "sample071"
  | "sample072"
  | "sample073"
  | "sample074"
  | "sample075"
  | "sample076"
  | "sample077"
  | "sample078"
  | "sample079"
  | "sample080"
  | "sample081"
  | "sample082"
  | "sample083"
  | "sample084"
  | "sample085"
  | "sample086"
  | "sample087"
  | "sample088"
  | "sample089"
  | "sample090"
  | "sample091"
  | "sample092"
  | "sample093"
  | "sample094"
  | "sample095"
  | "sample096"
  | "sample097"
  | "sample098"
  | "sample099"
  | "sample100"
  | "sample101"
  | "sample102"
  | "sample103"
  | "sample104"
  | "sample105"

export declare const manifest: DatasetManifest
export declare const sample001: HypergraphSample
export declare const sample002: HypergraphSample
export declare const sample003: HypergraphSample
export declare const sample004: HypergraphSample
export declare const sample005: HypergraphSample
export declare const sample006: HypergraphSample
export declare const sample007: HypergraphSample
export declare const sample008: HypergraphSample
export declare const sample009: HypergraphSample
export declare const sample010: HypergraphSample
export declare const sample011: HypergraphSample
export declare const sample012: HypergraphSample
export declare const sample013: HypergraphSample
export declare const sample014: HypergraphSample
export declare const sample015: HypergraphSample
export declare const sample016: HypergraphSample
export declare const sample017: HypergraphSample
export declare const sample018: HypergraphSample
export declare const sample019: HypergraphSample
export declare const sample020: HypergraphSample
export declare const sample021: HypergraphSample
export declare const sample022: HypergraphSample
export declare const sample023: HypergraphSample
export declare const sample024: HypergraphSample
export declare const sample025: HypergraphSample
export declare const sample026: HypergraphSample
export declare const sample027: HypergraphSample
export declare const sample028: HypergraphSample
export declare const sample029: HypergraphSample
export declare const sample030: HypergraphSample
export declare const sample031: HypergraphSample
export declare const sample032: HypergraphSample
export declare const sample033: HypergraphSample
export declare const sample034: HypergraphSample
export declare const sample035: HypergraphSample
export declare const sample036: HypergraphSample
export declare const sample037: HypergraphSample
export declare const sample038: HypergraphSample
export declare const sample039: HypergraphSample
export declare const sample040: HypergraphSample
export declare const sample041: HypergraphSample
export declare const sample042: HypergraphSample
export declare const sample043: HypergraphSample
export declare const sample044: HypergraphSample
export declare const sample045: HypergraphSample
export declare const sample046: HypergraphSample
export declare const sample047: HypergraphSample
export declare const sample048: HypergraphSample
export declare const sample049: HypergraphSample
export declare const sample050: HypergraphSample
export declare const sample051: HypergraphSample
export declare const sample052: HypergraphSample
export declare const sample053: HypergraphSample
export declare const sample054: HypergraphSample
export declare const sample055: HypergraphSample
export declare const sample056: HypergraphSample
export declare const sample057: HypergraphSample
export declare const sample058: HypergraphSample
export declare const sample059: HypergraphSample
export declare const sample060: HypergraphSample
export declare const sample061: HypergraphSample
export declare const sample062: HypergraphSample
export declare const sample063: HypergraphSample
export declare const sample064: HypergraphSample
export declare const sample065: HypergraphSample
export declare const sample066: HypergraphSample
export declare const sample067: HypergraphSample
export declare const sample068: HypergraphSample
export declare const sample069: HypergraphSample
export declare const sample070: HypergraphSample
export declare const sample071: HypergraphSample
export declare const sample072: HypergraphSample
export declare const sample073: HypergraphSample
export declare const sample074: HypergraphSample
export declare const sample075: HypergraphSample
export declare const sample076: HypergraphSample
export declare const sample077: HypergraphSample
export declare const sample078: HypergraphSample
export declare const sample079: HypergraphSample
export declare const sample080: HypergraphSample
export declare const sample081: HypergraphSample
export declare const sample082: HypergraphSample
export declare const sample083: HypergraphSample
export declare const sample084: HypergraphSample
export declare const sample085: HypergraphSample
export declare const sample086: HypergraphSample
export declare const sample087: HypergraphSample
export declare const sample088: HypergraphSample
export declare const sample089: HypergraphSample
export declare const sample090: HypergraphSample
export declare const sample091: HypergraphSample
export declare const sample092: HypergraphSample
export declare const sample093: HypergraphSample
export declare const sample094: HypergraphSample
export declare const sample095: HypergraphSample
export declare const sample096: HypergraphSample
export declare const sample097: HypergraphSample
export declare const sample098: HypergraphSample
export declare const sample099: HypergraphSample
export declare const sample100: HypergraphSample
export declare const sample101: HypergraphSample
export declare const sample102: HypergraphSample
export declare const sample103: HypergraphSample
export declare const sample104: HypergraphSample
export declare const sample105: HypergraphSample
